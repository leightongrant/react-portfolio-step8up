import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'

export const RepoItemSchema = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string().nullable(),
	html_url: z.string(),
	homepage: z.string().nullable(),
	created_at: z.string(),
	topics: z.array(z.string()),
})

export const ItemsSchema = z.object({
	items: z.array(RepoItemSchema),
})

const ReposArraySchema = RepoItemSchema.array()

export type Repos = z.infer<typeof ReposArraySchema>
export type Repo = z.infer<typeof RepoItemSchema>

const reposToInclude = 'step8up'
const endpoint = `https://api.github.com/search/repositories?q=${reposToInclude} user:leightongrant in:name`

const getRepos = async (url: string) => {
	const response = await fetch(url)
	if (!response.ok) {
		console.error('Network response was not ok')
		return []
	}
	const data: unknown = await response.json()
	const result = await ItemsSchema.safeParseAsync(data)
	if (result.success) return result.data.items
	if (result.error) {
		console.log(result.error.message)
		return []
	}
}

export const useGithubData = (url = endpoint) => {
	return useQuery({
		queryKey: ['repoData'],
		queryFn: () => getRepos(url),
	})
}
