enum Entities {
    Item,
    Entity,
    Something

}
type TOfEntities = typeof Entities
type TEntities = keyof typeof Entities