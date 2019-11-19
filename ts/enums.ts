// 枚举
//  数字枚举
enum Direction {
    Up=1,
    Down,//自增
    Left,
    Right
}
let move1 = Direction.Up

// 字符串枚举
enum Direction1 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// 异构枚举（Heterogeneous enums)(不建议)
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

// 计算的和常量成员
// E.X is constant:
enum E { X }
// All enum members in 'E1' and 'E2' are constant.
enum E1 { X, Y, Z }
enum E2 {
    A = 1, B, C
}