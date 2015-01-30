"use strict";

if (! window.mwurzberger) { var mwurzberger = {}; }
if (! mwurzberger.eote) { mwurzberger.eote = {}; 

mwurzberger.eote = {
    logClass: "mwurzberger.eote",

    initialize: function() {
        console.log(this.logClass + "initialize");
        // Override to prevent IE from throwing logging errors if debug tools are not open
        if( !window.console || !window.console.log ) {
            window.console = {};
            window.console.log = function() {};
        }   

        // Bindings
        $('#loadCharacter').on('click', $.proxy(this.handleLoadCharacter, this));
    },

    handleLoadCharacter: function( event ) {
        console.log(this.logClass + "handleLoadCharacter");        
        event.preventDefault();
        event.stopPropagation();

        var sheetUrl = $('#sheetUrl').val();

        this.loadCharacter( sheetUrl );
    },

    loadCharacter: function( sheetUrl ) {
        console.log(this.logClass + "loadCharacter"); 
        Tabletop.init({ 
            key: public_spreadsheet_url,
            callback: this.displayCharacter,
            simpleSheet: true 
        });
    },

    displayCharacter: function( data, tabletop ) {
        alert("Successfully processed!")
        console.log(data);
    }
}

$(document).ready(function() {
    mwurzberger.eote.initialize();
});