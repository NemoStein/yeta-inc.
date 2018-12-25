const Direction = {}

Direction.UP = 0b1
Direction.RIGHT = 0b10
Direction.DOWN = 0b100
Direction.LEFT = 0b1000
Direction.VERTICAL = Direction.UP | Direction.DOWN
Direction.HORIZONTAL = Direction.RIGHT | Direction.LEFT
Direction.ALL = Direction.VERTICAL | Direction.HORIZONTAL

export
{
	Direction
}
