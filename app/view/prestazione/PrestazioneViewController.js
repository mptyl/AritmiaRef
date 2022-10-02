/*
 * File: app/view/prestazione/PrestazioneViewController.js
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

Ext.define('AritmiaRef.view.prestazione.PrestazioneViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.prestazione.prestazione',

    onPrestazioneComboboxSelect: function(combo, record, eOpts) {
        const form=combo.up('form');
        const viewModel= form.getViewModel();
        const selectedRecord=viewModel.get('recordPrestazione');
        selectedRecord.set('description',record.get('description'));
        selectedRecord.set('prestazioneFk',record.get('id'));
        selectedRecord.set('code',record.get('code'));
        selectedRecord.set('description',record.get('description'));
    },

    onSaveButtonClick: function(button, e, eOpts) {
        const form=button.up('form');
        const viewModel=button.up('form').getViewModel();
        const store=viewModel.get('storePrestazioniJoined');
        const record=viewModel.get('recordPrestazione');
        const action=viewModel.get('action');
        if(action=='ADD')
        store.add(record);
        store.sync();
        store.reload();
        button.up('window').close();
    }

});
