{
    // method to submit the form data for new post using AJAX
    console.log("hello")
    let createPost = function () {
        let newPostForm = $('#new-post-form');

        newPostForm.submit(function (e) {
            e.preventDefault();
            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: newPostForm.serialize(),
                success: function (data) {
                    console.log(data);
                },
                error: function (data) {
                    console.log(err.responseText);
                }

            });
            
            
        });
    }


    // method to create a post in DOM


    createPost();
}


