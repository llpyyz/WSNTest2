Ext.define('WSN_Test2.view.SongList', {
	extend : "Ext.Panel",
	xtype  : 'songlist',
	requires : [
		'Ext.TitleBar',
		'Ext.MessageBox',
		'Ext.SegmentedButton'],
	

	config : {
		title   : 'Songs',
		iconCls : 'star',
		items : [
		{
			
			xtype  : 'toolbar',
			docked : 'top',
			
			items : [
			{
				xtype : 'spacer'
			},
			{
				xtype : 'button',
				text  : 'select',
				ui    : 'action',
				id    : 'select-song-btn'

			}]


		}]
	}







});