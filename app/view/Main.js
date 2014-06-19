Ext.define('WSN_Test2.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.MessageBox',
        'Ext.SegmentedButton'
    ],
    config: {
        tabBarPosition: 'bottom',
        layout : {
            
            animation : 'cover'
        },

        items: [
        {
                title: 'Home',
                iconCls: 'home',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: "Welcome to The World Song Network"

                },

                html: [
                "<h3>Your professional music licensing resource</h3>",
                "<p>You will find thousands of hand-picked classic and contemporary songs in all styles, years and moods available for easy preview, download and licensing utilizing this state-of-the-art online song repository.</p>",
                "<hr>",
                "<h4>Artists on the World Song Network:</h4>",
                "Aerosmith, Frank Sinatra, Snoop Dogg, etc."

                ].join("")
            },
            {
                xtype : 'search'
            },
            {
                xtype : 'tags'
            }, {xtype: 'songlist'}
            /*,
            {   xtype  : 'panel',


                config : {
                    //layout : 'hbox',
                    title : 'your mom',
                    iconCls : 'user',    
                    items  : [
                    {
                        xtype : 'image',
                        src : '.../resources/images/bet.jpg'
                    }]
                }
            }*/
            
        ]
    }
});
