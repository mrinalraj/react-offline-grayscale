import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import './style.css'

const fliterOptions = ['grayscale', 'sepia', 'none']
export default class ReactOffline extends Component {
	static propTypes = {
		enableClick: PropTypes.bool,
		filter: PropTypes.oneOf(fliterOptions),
		barStyle: PropTypes.object,
		customPageStyle: PropTypes.object,
		customOfflineText: PropTypes.string,
	}

	state = { isDisconnected: false }

	componentDidMount() {
		window.addEventListener('online', this.handleConnectionChange)
		window.addEventListener('offline', this.handleConnectionChange)
		this.handleConnectionChange()
	}

	componentWillUnmount() {
		window.removeEventListener('online', this.handleConnectionChange)
		window.removeEventListener('offline', this.handleConnectionChange)
	}

	handleConnectionChange = () => {
		const condition = navigator.onLine ? 'online' : 'offline'
		if (condition === 'online') {
			const webPing = setInterval(() => {
				fetch('//google.com', {
					mode: 'no-cors',
				})
					.then(() => {
						this.setState({ isDisconnected: false }, () => {
							this.enableClick()
							return clearInterval(webPing)
						})
					})
					.catch(() => {
						this.setState({ isDisconnected: true })
						this.disableClick()
					})
			}, 2000)
			return
		}

		return this.setState({ isDisconnected: true }, () => {
			this.disableClick()
		})
	}

	disableClick = () => {
		if (!this.props.enableClick) document.addEventListener('click', this.handler, true)
	}
	enableClick = () => {
		if (!this.props.enableClick) document.removeEventListener('click', this.handler, true)
	}

	handler = e => {
		e.stopPropagation()
		e.preventDefault()
	}

	render() {
		const { isDisconnected } = this.state
		const { barStyle, customPageStyle, filter = 'grayscale', customOfflineText } = this.props
		return (
			<React.Fragment>
				{isDisconnected && (
					<div className='indication-bar' style={barStyle}>
						{customOfflineText || `You are offline`}
					</div>
				)}
				<div className={isDisconnected && filter} style={customPageStyle}>
					{Children.only(this.props.children)}
				</div>
			</React.Fragment>
		)
	}
}
