export function isMockTestsTrue(mock, localStorageName) {
  if (import.meta.env.VITE_REACT_APP_MOCK_TEST === 'true') {
    return localStorage.setItem(localStorageName, JSON.stringify(mock))
  }
  return []
}