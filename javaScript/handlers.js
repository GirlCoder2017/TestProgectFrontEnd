$(document).ready ( function(){


    moment().format();

    $('#like').click(      //handlers for count likes
        function () {
            document.getElementById('count').innerText = Number(document.getElementById('count').innerText) + 1;
        }
    );


   $('#write').click(               //handlers for button "write consultant"

        function () {


            var now=moment().format('LL');

            var valueInput = document.getElementById("Textarea").value;
            var userName = "unknown user";

            var date=now;

            var rewiew = document.getElementById('rewiew').innerHTML;

            var replace;
            replace= rewiew.replace("%username%", userName);

            replace = replace.replace("  %date%", date);
            replace = replace.replace("%text% ", valueInput);

            document.getElementById('onerewiews').innerHTML += replace;

        }

   );

});
