export const isVisibleInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect()
    return rect.top + rect.height >= 0
}