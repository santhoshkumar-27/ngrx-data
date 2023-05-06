import { EntityDataModuleConfig, EntityMetadataMap } from "@ngrx/data";
export const POST_ENTITY_NAME = 'Post'
const entityMetadata: EntityMetadataMap = {
    [POST_ENTITY_NAME]: {
        entityDispatcherOptions: {
            optimisticUpdate: true
        }
    }
}

export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
}