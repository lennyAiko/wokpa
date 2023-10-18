export type MenuType = {
    name: string,
    img: string
}

export type CardType = {
    name: string,
    author: string,
    img: string,
    catImg: string,
    category: string
}

export type CategoryType = {
  message: string,
  data: [{id:string, name:string, type:string, image_url:string, created_at: string, updated_at: string}]
}