import dynamic from 'next/dynamic'
import React from 'react'

const AppContainer = (props) => <React.Fragment>{props.children}</React.Fragment>
	
	export default dynamic(() => Promise.resolve(AppContainer), {
			ssr: false
	})
