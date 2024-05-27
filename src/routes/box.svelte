<script>
	import styled from './styled'
	import theme from './theme'
</script>

<div use:styled={{$$props, theme}}>
	<slot />
</div>