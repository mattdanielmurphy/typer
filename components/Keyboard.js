import React from 'react'

const keysQwerty = `${'`~ 1! 2@ 3# 4$ 5% 6^ 7& 8* 9( 0) -_ =+ BackSpace ' +
	'Tab q w e r t y u i o p [{ ]} \\| ' +
	'CapsLock a s d f g h j k l ;: \'" Enter ' +
	'ShiftLeft z x c v b n m ,< .> /? ShiftRight ' +
	'Space'}`.split(' ')

const keys = keysQwerty

const makeKey = (keys, options = {}) => {
	const { isDouble, isSpecial, isDown, isCurrent } = options
	let topKey = keys
	let bottomKey
	let className = 'key'
	if (isDouble) {
		bottomKey = String(keys[0])
		topKey = String(keys[1])
	}
	const specialKeys = {
		BackSpace: <span>&larr;</span>,
		Enter: <span>&#8629;</span>,
		ShiftLeft: <span>Shift</span>,
		ShiftRight: <span>Shift</span>
	}

	if (isSpecial) {
		className += ` is-${topKey.toLowerCase()}`
		if (specialKeys[topKey]) topKey = specialKeys[topKey]
	}

	if (isDown) className += ' key-down'
	if (isCurrent) className += ' key-current'

	return (
		<div key={className + topKey} data-key={topKey} data-alt-key={bottomKey} className={className}>
			<div className="key__top">{topKey}</div>
			{bottomKey && <div className="key__bottom">{bottomKey}</div>}
		</div>
	)
}

const getKey = (key, keysDown, currentChar) => {
	const isSpecial = key.length > 2
	const isDouble = key.length > 1 && !isSpecial
	const isDown = isDouble ? keysDown[key[1]] || keysDown[key[0]] : keysDown[key]
	const isCurrent = key === 'Space' ? ' ' === currentChar : key === currentChar
	return makeKey(key, { isSpecial, isDouble, isDown, isCurrent })
}

const Keyboard = ({ keysDown, currentChar }) => {
	return (
		<div className="keyboard-container">
			<div className="keyboard">{keys.map((key) => getKey(key, keysDown, currentChar))}</div>
		</div>
	)
}

export default Keyboard
