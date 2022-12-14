/*
 * File: app/view/MainView.js
 *
 * This file was generated by Sencha Architect version 4.3.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 7.6.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 7.6.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AritmiaRef.view.MainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainview',

    requires: [
        'AritmiaRef.view.MainViewViewModel',
        'AritmiaRef.view.visita.Visite',
        'AritmiaRef.view.visita.Visita',
        'Ext.menu.Menu',
        'Ext.menu.Separator',
        'Ext.Img'
    ],

    viewModel: {
        type: 'mainview'
    },
    itemId: 'mainView',
    layout: 'border',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'panel',
            region: 'west',
            split: true,
            itemId: 'menuPanel',
            width: 150,
            title: 'Menu',
            items: [
                {
                    xtype: 'menu',
                    floating: false,
                    itemId: 'menu',
                    items: [
                        {
                            xtype: 'menuitem',
                            itemId: 'home',
                            text: 'Home',
                            focusable: true
                        },
                        {
                            xtype: 'menuitem',
                            itemId: 'pazienti',
                            text: 'Pazienti',
                            focusable: true
                        },
                        {
                            xtype: 'menuitem',
                            itemId: 'ospedalizzazioni',
                            text: 'Ospedalizzazioni',
                            focusable: true
                        },
                        {
                            xtype: 'menuitem',
                            itemId: 'visite',
                            text: 'Visite',
                            focusable: true
                        },
                        {
                            xtype: 'menuseparator',
                            text: 'Menu Item'
                        },
                        {
                            xtype: 'menuitem',
                            itemId: 'telemedicina',
                            text: 'Telemedicina',
                            focusable: true
                        },
                        {
                            xtype: 'menuitem',
                            itemId: 'appuntamenti',
                            text: 'Appuntamenti',
                            focusable: true
                        },
                        {
                            xtype: 'menuitem',
                            itemId: 'dispositivi',
                            text: 'Dispositivi',
                            focusable: true
                        }
                    ],
                    listeners: {
                        click: 'onMenuClick'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'center',
            itemId: 'contentPanel',
            layout: 'card',
            items: [
                {
                    xtype: 'panel',
                    itemId: 'homePanel',
                    title: 'AritmiaRef',
                    titleAlign: 'center',
                    layout: {
                        type: 'vbox',
                        align: 'center'
                    },
                    items: [
                        {
                            xtype: 'image',
                            flex: 1,
                            maxHeight: 600,
                            src: 'http://localhost:3000/images/sandonato.jpg'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    itemId: 'pazientiPanel',
                    title: 'Paziente',
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    }
                },
                {
                    xtype: 'visita.visite'
                },
                {
                    xtype: 'panel',
                    itemId: 'ospedalizzazioniPanel',
                    title: 'Ospedalizzazioni',
                    titleAlign: 'center'
                },
                {
                    xtype: 'panel',
                    itemId: 'telemedicinaPanel',
                    title: 'Telemedicina',
                    titleAlign: 'center'
                },
                {
                    xtype: 'panel',
                    itemId: 'appuntamentiPanel',
                    title: 'Appuntamenti',
                    titleAlign: 'center'
                },
                {
                    xtype: 'panel',
                    itemId: 'dispositiviPanel',
                    title: 'Dispositivi',
                    titleAlign: 'center'
                },
                {
                    xtype: 'visita.visita'
                }
            ]
        }
    ],

    onMenuClick: function(menu, item, e, eOpts) {
        location.hash = item.itemId;
    }

});