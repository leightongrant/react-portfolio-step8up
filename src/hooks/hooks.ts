import { useState, useEffect } from 'react'
import { z } from 'zod'

type FetchReturn = {
	loading: boolean
	error: string | null
	data: Repo[] | Repo | string | null
}

export const RepoSchema = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	html_url: z.string(),
	homepage: z.string(),
	created_at: z.string(),
	topics: z.array(z.string()),
})

const ReposSchema = z.object({
	items: z.array(RepoSchema),
})

export type Repos = z.infer<typeof ReposSchema>
export type Repo = z.infer<typeof RepoSchema>

const ReadMeSchema = z.string()

export const useFetch = (url: string, options?: RequestInit): FetchReturn => {
	const [data, setData] = useState<null | Repo[] | Repo | string>(null)
	const [error, setError] = useState<null | string>(null)
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		getData()
	}, [])

	const getData = async (): Promise<void> => {
		try {
			setLoading(true)
			const response = await fetch(url, options)
			if (!response.ok) {
				const error: unknown = await response.json()
				if (error instanceof Error) {
					throw new Error(error.message)
				}
				throw new Error('An unknown error has occured!')
			}
			if (response.headers.get('content-type')?.includes('application/vnd.github.v3.raw')) {
				const data: unknown = await response.text()
				const readme = ReadMeSchema.parse(data)
				setData(readme)
				return
			}

			const data: unknown = await response.json()
			const repo = await RepoSchema.safeParseAsync(data)
			if (repo.success) {
				setData(repo.data)
				return
			}
			const repos = await ReposSchema.safeParseAsync(data)
			if (repos.success) {
				setData(repos.data.items)
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				setError(error.message)
				console.log('ERROR: ', error.message)
			} else if (error instanceof z.ZodError) {
				setError(JSON.stringify(error.issues, null, 4))
				console.log('ZOD ERROR: ', error.issues)
			} else {
				setError('An unknown error has occured!')
				console.log('An unknown error has occured!')
			}
		} finally {
			setLoading(false)
		}
	}

	return { loading, data, error }
}
