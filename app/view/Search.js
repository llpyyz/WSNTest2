Ext.define('WSN_Test2.view.Search', {
	extend : 'Ext.Panel',
	xtype  : 'search',
	requires : [
		'Ext.TitleBar',
		'Ext.MessageBox',
		'Ext.SegmentedButton'],

	config : {
		title   : 'Search WSN',
		iconCls : 'search',
		layout : {
			//type : 'hbox',
			pack : 'justify',
			align : 'stretch',
			type : 'card',
			animation : 'flip'
		},
		itemId : 'mytrans',

		items   : [
		{	
			docked : 'top',
			xtype  : 'titlebar',
			title  : 'Search',
			items  : [
			{
				text : 'Go!',
				ui : 'confirm',
				handler : function () {
					Ext.Msg.alert("INFO", "this searches the WSN catalog!");
				}
			}]

		},
		{
			xtype : 'fieldset',
			title : "Enter Song Search Criteria",
			flex : 2,
			items : [
			{
				xtype   : 'checkboxfield',
				name    : '100pct',
				value   : '100pct',
				label   : '100% ALL-IN',
				checked : true
				
			},
			{
				xtype : 'checkboxfield',
				name  : 'hot 100',
				value : 'hot 100',
				label : 'Billboard Hot 100'

			},
			{
				xtype : 'searchfield',
				name  : 'keyword',
				label : 'Keyword'
			},
			{
				xtype : 'searchfield',
				name  : 'artist',
				label : 'Artist'
			},
			{
				xtype : 'textfield',
				name  : 'featuredInst',
				label : 'Featured Instruments'
			},
			{
				xtype : 'textfield',
				name  : 'writers',
				label : 'Writers'
			},
			{
				xtype : 'textfield',
				name  : 'catalog',
				label : 'Catalog'
			},
			{
				xtype : 'datepickerfield',
				name  : 'date',
				label : 'Year of Release',
				picker : {
					xtype :'datepicker', 
					slotOrder : ["year"], 
					yearFrom : 1900, 
					yearTo: 2014,
				}
			}]

		},
		{
			xtype : 'fieldset',
			title : 'A List goes here',
			flex : 1, 
			items : [
			{
				xtype : 'textfield',
				name : 'something',
				label : 'Something'
			}]
		},
		{
			xtype : 'button',
			docked : 'bottom',
			text : 'Show Search Results',
			handler : function () {
				var trans = Ext.ComponentQuery.query("#mytrans")[0];
					
					var txt = this.getText();
					if(txt == 'Show Search Results'){
					  trans.setActiveItem(1);
					  this.setText('Show Search Fields');  
					}
					else{
					  trans.setActiveItem(0);
					  this.setText('Show Search Results');  
					}
					

			}
		}]			

	}
});