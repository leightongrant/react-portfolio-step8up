export const normalizeRepoName = (repoName: string): string => {
	return repoName.replace(/step8up/, '').replace(/-/g, ' ')
}
