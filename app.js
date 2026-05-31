
            const inp = document.getElementById('pw-inp');
            const res = document.getElementById('pw-res');
            inp.addEventListener('input', () => {
                const v = inp.value;
                if (v.length === 0) res.innerText = 'Too Short';
                else if (v.length < 6) res.innerText = 'Weak';
                else if (v.length < 10) res.innerText = 'Medium';
                else res.innerText = 'Strong 💪';
            });
        