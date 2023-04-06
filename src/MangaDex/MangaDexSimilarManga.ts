import { SourceStateManager } from '@paperback/types'
import { getAmountRecommendations } from './MangaDexSettings'
export const getRecommendedIds = async (
  stateManager: SourceStateManager,
): Promise<string[]> => {
  // Return the list of ids that should be used for recommendations
  // We don't need to check the length of the list. If the max length was changed by the user,
  // the list should have been modified
  return ((await stateManager.retrieve('recommendedIds')) as string[]) ?? []
}
export const sliceRecommendedIds = async (
  stateManager: SourceStateManager,
  amount: number,
): Promise<void> => {
  // Only keep `amount` elements in the recommendation list
  const recommendedIds: string[] = await getRecommendedIds(stateManager)
  stateManager.store('recommendedIds', recommendedIds.slice(0, amount))
}
export const addRecommendedId = async (
  stateManager: SourceStateManager,
  mangaId: string,
): Promise<void> => {
  // Add an id to the list of manga that should be used for recommendations
  const recommendedIds: string[] = await getRecommendedIds(stateManager)
  // If the id is already in the list, we remove it to put it at the beginning
  const index = recommendedIds.indexOf(mangaId, 0)
  if (index > -1) {
    recommendedIds.splice(index, 1)
  }
  // We add the id at the beginning of list
  recommendedIds.unshift(mangaId)
  // We only keep the right amount of titles in order to prevent the list from being to large
  stateManager.store(
    'recommendedIds',
    recommendedIds.slice(0, await getAmountRecommendations(stateManager)),
  )
}
/*
async removeRecommendedId(id: string): Promise<void>{
    const recommendedIds: string[] = await this.getRecommendedIds()
    
    // If the id is already in the list, we put it at the end
    const index = recommendedIds.indexOf(id, 0)
    if (index > -1) {
        recommendedIds.splice(index, 1)
    }
    
    this.stateManager.store('recommendedIds', recommendedIds)
}
*/
