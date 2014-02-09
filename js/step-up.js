(function() {

    "use strict";

    var setupComments = function() {
      $('.comment-area').hide();

      var $postComments =  $('[data-action="list-comments"]');
      $postComments.data('hidden', true);

      $postComments.on('click', function() {
        var $this = $(this);

        var $commentList = $this.parent().find('.comment-area');

        var hidden = $this.data('hidden');

        var hideState = !hidden;
        $this.data('hidden', hideState);
        if (hideState) {
          $commentList.slideUp('medium');
        }
        else {
          $commentList.slideDown('medium');
        }
        return false;
      });

      var $postButton = $('[data-action="post-reply"]').on('click', function() {
        var text = $('#reply-1').val();
        console.log("Posting message: " + text);
        return false;
      });

      var $greatAdvice = $('[data-action="save-favorite"]');
      $greatAdvice.on('click', function() {
        console.log("Great advice");
        $('[data-action="list-comments"]').click();
        return false;
      });
    };

    setupComments();
})();
