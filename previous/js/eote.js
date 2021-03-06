"use strict";

if (! window.mwurzberger) { var mwurzberger = {}; }
if (! mwurzberger.eote) { mwurzberger.eote = {}; }

mwurzberger.eote = {
    logClass: "mwurzberger.eote ",
    datasource: null,

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
            key: sheetUrl,
            callback: $.proxy(this.displayCharacter, this));
            simpleSheet: true 
        });
    },

    displayCharacter: function( data, tabletop ) {
        console.log(data);
        this.datasource = tabletop;
    }
};

$(document).ready(function() {
    mwurzberger.eote.initialize();
});