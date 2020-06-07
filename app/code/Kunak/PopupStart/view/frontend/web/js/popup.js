define(
  [
    'jquery',
    'Magento_Ui/js/modal/modal',
    'mage/translate'
  ],
  function ($) {
    "use strict";
    //creating jquery widget 
    $.widget('Kunak.Popup', {
      options: {
        modalForm: '#popup',
        modalButton: '.popup-open'
      },

      _create: function () {
        this.options.modalOption = this.getModalOptions();
        this._bind();
      },

      getModalOptions: function () {
        /** * Modal options */
        var options = {
          type: 'slide',
          responsive: true,
          clickableOverlay: false,
          title: $.mage.__('PopUp'),
          modalClass: 'popup',
          // modalContent: $.mage.__('Modal Content from popup.js'),
          buttons: [{
            text: $.mage.__('Yes, I got you!'),
            class: '',
            click: function () {
              this.closeModal();
            }
          }]
        };
        return options;
      },

      _bind: function () {
        var modalOption = this.options.modalOption;
        var modalForm = this.options.modalForm;
        $(document).on('click', this.options.modalButton, function () {
          $(modalForm).modal(modalOption);
          $(modalForm).trigger('openModal');
        });
      }
    });

    return $.Kunak.Popup;
  }
);