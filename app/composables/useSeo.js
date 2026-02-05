export const useSeo = (title, description) => {
  useHead({
    title,
    meta: [{ name: 'description', content: description }],
  })
}
