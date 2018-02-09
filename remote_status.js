(function ($) {
    /**
     * Load remote content after the main page loaded.
     */
    Drupal.behaviors.remote_status_load_remote_content = {
        attach: function (context, settings) {
            $('#remote-content-wrapper').once('remote-content-wrapper', function () {

                var base = $(this).attr('id');

                var element_settings = {
                    url: window.location.protocol + '//' + window.location.hostname + settings.basePath + settings.pathPrefix + 'ajax/remote',
                    event: 'click',
                    progress: {
                        type: 'throbber'
                    }
                };
                Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
                $(this).click();
            });
        }
    };
})(jQuery);
