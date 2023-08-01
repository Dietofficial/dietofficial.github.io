
 // JavaScript code for the contact section
        function validateForm() {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const countryInput = document.getElementById('country');
            const messageInput = document.getElementById('message');
            const formError = document.getElementById('formError');

            // Reseting any existing error messages
            formError.textContent = '';
            nameInput.classList.remove('error');
            emailInput.classList.remove('error');
            phoneInput.classList.remove('error');
            countryInput.classList.remove('error');
            messageInput.classList.remove('error');

            // Checking if all fields are filled
            if (!nameInput.value || !emailInput.value || !phoneInput.value || !countryInput.value || !messageInput.value) {
                formError.textContent = 'Please fill in all required fields.';
                return false;
            }

            // Validating email format
            const emailRegex = /^\S+@\S+\.\S+$/;
            if (!emailRegex.test(emailInput.value)) {
                formError.textContent = 'Invalid email format.';
                emailInput.classList.add('error');
                return false;
            }

            // Validating phone number format (assumes a simple format)
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phoneInput.value)) {
                formError.textContent = 'Invalid phone number format (10 digits only).';
                phoneInput.classList.add('error');
                return false;
            }

            return true;
        }	
		
	//qna or Information Section
		
		// Variable 

			const acord = document.getElementsByClassName('content-container');

			for (let i = 0; i < acord.length; i++) {
			  acord[i].addEventListener('click', function() {
				this.classList.toggle('active');
			  });
			}
	// Variables

			let btn = document.querySelector('#newquote');
			let quote = document.querySelector('.quote');
			let person = document.querySelector('.person');

			const quotes = [{
				quote: `"Fitness is not about being better than someone else. It's about being better than you used to be."`,
				person: ` Khloe Kardashian`
			}, {
				quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
				person: ` Albert Einstein`
			}, {
				quote: `"Take care of your body; it's the only place you have to live."`,
				person: `Jim Rohn`
			}, {
				quote: `"Your time is limited, so dont waste it living someone else's life."`,
				person: ` Steve Jobs`
			}, {
				quote: `"Exercise is a celebration of what your body can do. Not a punishment for what you ate."`,
				person: ` Women's Health UK`
			}, {
				quote: `"Let food be thy medicine, and medicine be thy food."`,
				person: `Hippocrates`
			}, {
				quote: `"It does not matter how slowly you go as long as you do not stop."`,
				person: `Confucius`
			}, {
				quote: `"A healthy outside starts from the inside."`,
				person: `Robert Urich.`
			}, {
				quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
				person: `Dalai Lama`
			}, {
				quote: `"The journey of a thousand miles begins with one step."`,
				person: `Lao Tzu`
			}, ];

			btn.addEventListener('click', function(){

				let random = Math.floor(Math.random() * quotes.length);

				quote.innerText = quotes[random].quote;
				person.innerText = quotes[random].person;

			})