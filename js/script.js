
        function plus(){
            var tn1plus = window.document.getElementById('txtn1-plus');
            var tn2plus = window.document.querySelector('input#txtn2-plus');
            var res1 = window.document.getElementById ('res1');
            var n1plus = Number(tn1plus.value);
            var n2plus = Number(tn2plus.value);
            var splus = n1plus + n2plus ;
            res1.innerHTML = `${n1plus} plus ${n2plus} is equal to <strong>|${splus}|<strong>`;
        } // This block calcs addition

        function less(){
            var tn1less = window.document.getElementById('txtn1-less');
            var tn2less = window.document.querySelector('input#txtn2-less');
            var res2 = window.document.getElementById ('res2');
            var n1less = Number(tn1less.value);
            var n2less = Number(tn2less.value);
            var sless = n1less - n2less ;
            res2.innerHTML = `${n1less} minus ${n2less} is equal to <strong>|${sless}|<strong>`;
        } // This block calcs substraction

        function multiply(){
            var tn1multiply = window.document.getElementById('txtn1-multiply');
            var tn2multiply = window.document.querySelector('input#txtn2-multiply');
            var res3 = window.document.getElementById ('res3');
            var n1multiply = Number(tn1multiply.value);
            var n2multiply = Number(tn2multiply.value);
            var smultiply = n1multiply * n2multiply;
            res3.innerHTML = `${n1multiply} times ${n2multiply} is equal to <strong>|${smultiply}|<strong>`;
        } // This block calcs multiplication

        function divide(){
            var tn1divide = window.document.getElementById('txtn1-divide');
            var tn2divide = window.document.querySelector('input#txtn2-divide');
            var res4 = window.document.getElementById ('res4');
            var n1divide = Number(tn1divide.value);
            var n2divide = Number(tn2divide.value);
            var sdivide = n1divide / n2divide;
            if (n1divide == 0 || n2divide == 0){ // This if was applied because any value divided by 0 is 0.
                res4.innerHTML = `You cannot divide by 0. Try again`;
            } else {
            res4.innerHTML = `${n1divide} divided by ${n2divide} is equal to <strong>|${sdivide}|<strong>`;
            } // This block calcs division
        }