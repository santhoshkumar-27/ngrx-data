import { EntityDataModuleConfig, EntityMetadataMap } from "@ngrx/data";
export const POST_ENTITY_NAME = 'Post'
const entityMetadata: EntityMetadataMap = {
    [POST_ENTITY_NAME]: {}
}

export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
}