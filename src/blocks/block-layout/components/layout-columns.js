import icons from './icons';

const { __ } = wp.i18n;

const layoutColumns = {
	2 : [
		{ key: 'equal', col: 1, name: __( 'Row' ), icon: icons.row },
		{ key: 'equal', col: 2, name: __( 'Two: Equal' ), icon: icons.twocol },
		{ key: 'center-wide', col: 3, name: __( 'Three: Wide Center' ), icon: icons.widecenter, layout: 'wide-center' }
	],
	3 : [
		{ key: 'equal', col: 1, name: __( 'Row' ), icon: icons.row },
		{ key: 'equal', col: 2, name: __( 'Two: Equal' ), icon: icons.twocol },

	],
}

export default layoutColumns
