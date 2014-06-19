Ext.define('WSN_Test2.view.Tags', {
    extend : 'Ext.Panel',
    xtype : 'tags',
    requires : [
        'Ext.TitleBar',
        'Ext.MessageBox',
        'Ext.SegmentedButton'],

    config : {
        title   : 'Tags',
        iconCls : 'add',

        scrollable : true,

        items   : [
        {
            docked : 'top',
            xtype  : 'titlebar',
            title  : 'Select Tags for Mood and Style',
            items: [
            {
                text : 'Back',
                ui   : 'back'
            }]

        },
        {
            xtype  : 'toolbar',
            docked : 'bottom',
            items  : [
            {
                text : 'Go!',
                ui   : 'confirm',
                handler : function () {
                    Ext.Msg.alert("INFO", "this searches the WSN catalog!");
                }
            }]
        },
        {
            xtype : 'segmentedbutton',
            allowDepress  : true,
            allowMultiple : true,
            items : [
            {
                text : 'Energetic'
            },
            {
                text : 'Feel Good'
            },
            {
                text : 'Powerful'
            },
            {
                text : 'Moody/Dark'
            },
            {
                text : 'Big/Animated'
            },
            {
                text : 'Aggressive'
            },
            {
                text : 'Angelic'
            },
            {
                text : 'Angry'
            },
            {
                text : 'Anthemic'
            },
            {
                text : 'Atmospheric'
            }]
        }]

    }

});










