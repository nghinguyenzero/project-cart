## Note project
App
    Header
    Products
        pr
        pr
    Mesege
    Cart
        CartItem
        CartItem
        CartResult
    Footer

REDUX:
`Store`: chứa các `state`
`Reducer` là func, nhận vào các `action` và `state` -> trả ra `state` mới cho `Store`

Thực hiện `action`: `store` gọi tới `func dispatcher` để gửi `action` vào `reducer`
