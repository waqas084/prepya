<script defer>
    function $(selector, parent = document) {
        return parent.querySelector(selector)
    }

    function $$(selector, parent = document) {
        return [...parent.querySelectorAll(selector)]
    }

    function strToDom(str) {
        return document.createRange().createContextualFragment(str).firstChild
    }
    function validateEmail(email) {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }
    const email = $('#email')
    const error = $('#error')
    const submit = $('#submit')
    let textarea

    submit.addEventListener('click', function () {
        if (!validateEmail(email.value)) {
            error.textContent = `Votre adresse email n'est pas valide`
            email.focus()
        }
        else {
            error.textContent = ``
            $('#quizz label').style.display = 'none'
            this.style.display = 'none'
            $('.eapps-form-element-input-email').value = email.value
            displayResult()
            $('.eapps-form-button').click()
        }
    })
    const subquizz = {
        "ASTF": [
            // Question 1
            {
                question: "Moyenne de $N-1",
                type: "select",
                answers: [{
                    text: "10 - 11.5",
                    value: 10.75
                },
                {
                    text: "11.5 - 12",
                    value: 11.75
                },
                {
                    text: "12 - 13",
                    value: 12.5
                },
                {
                    text: "13 - 14",
                    value: 13.5
                },
                {
                    text: "14 - 15",
                    value: 14.5
                },
                {
                    text: "15+",
                    value: 15
                }
                ]
            },
            // Question 2
            {
                question: "Moyenne de $N-2",
                type: "select",
                answers: [{
                    text: "10 - 11.5",
                    value: 10.75
                },
                {
                    text: "11.5 - 12",
                    value: 11.75
                },
                {
                    text: "12 - 13",
                    value: 12.5
                },
                {
                    text: "13 - 14",
                    value: 13.5
                },
                {
                    text: "14 - 15",
                    value: 14.5
                },
                {
                    text: "15+",
                    value: 15
                }
                ]
            }
        ],
        "ASTI": [],
    }
    const quizz = {
        "ASTF": [
            // Question 1
            {
                question: "Score TOEIC visé (approximativement)",
                type: "select",
                answers: [{
                    text: "850 - 900",
                    value: 875
                },
                {
                    text: "900 - 945",
                    value: 922.5
                },
                {
                    text: "945 - 965",
                    value: 955
                },
                {
                    text: "970+",
                    value: 970
                }
                ]
            },
            // Question 2
            {
                question: "Avez-vous redoublé durant votre cursus?",
                type: "button",
                answers: [{
                    text: "Oui",
                    value: "true"
                },
                {
                    text: "Non",
                    value: "false"
                }
                ]
            },
            // Question 3
            {
                question: "Filière d'origine",
                type: "select",
                answers: [{
                    text: "Gestion",
                    value: "A"
                }, {
                    text: "Economie",
                    value: "A"
                }, {
                    text: "Finance",
                    value: "A"
                }, {
                    text: "Management",
                    value: "A"
                }, {
                    text: "CCA",
                    value: "A"
                }, {
                    text: "AES",
                    value: "A"
                }, {
                    text: "DUETI",
                    value: "B"
                }, {
                    text: "BBA",
                    value: "C"
                }, {
                    text: "Droit",
                    value: "D"
                }, {
                    text: "Histoire",
                    value: "D"
                }, {
                    text: "LEA",
                    value: "D"
                }, {
                    text: "LLCER",
                    value: "D"
                }, {
                    text: "Pharmacie",
                    value: "E"
                }, {
                    text: "Ingénieur",
                    value: "F"
                }, {
                    text: "Mathématiques",
                    value: "G"
                }, {
                    text: "Informatique",
                    value: "G"
                }, {
                    text: "Double diplôme droit-gestion",
                    value: "H"
                }, {
                    text: "Double diplôme droit-economie",
                    value: "H"
                }, {
                    text: "Double diplôme droit-histoire de l'art",
                    value: "H"
                }]
            },
            // Question 4
            {
                question: "Votre établissement d'origine",
                type: "select",
                answers: [{
                    text: "ECE",
                    value: "E2"
                },
                {
                    text: "EDHEC",
                    value: "C2"
                },
                {
                    text: "EIML",
                    value: "F2"
                },
                {
                    text: "EM Lyon",
                    value: "C2"
                },
                {
                    text: "ENSIIE",
                    value: "E2"
                },
                {
                    text: "ESCP",
                    value: "C2"
                },
                {
                    text: "ESILV",
                    value: "E2"
                },
                {
                    text: "ESSEC",
                    value: "C2"
                },
                {
                    text: "ESTP",
                    value: "E2"
                },
                {
                    text: "INSA Lyon",
                    value: "E2"
                },
                {
                    text: "ISEP",
                    value: "E2"
                },
                {
                    text: "Neoma",
                    value: "C2"
                },
                {
                    text: "Paris 1 - Panthéon Sorbonne",
                    value: "A2"
                },
                {
                    text: "Paris 2 - Panthéon Assas",
                    value: "A2"
                },
                {
                    text: "PSB",
                    value: "F2"
                },
                {
                    text: "Skema",
                    value: "F2"
                },
                {
                    text: "Sorbonne Université Paris 6",
                    value: "A2"
                },
                {
                    text: "Université Catholique de Lille",
                    value: "B2"
                },
                {
                    text: "Université Catholique de Paris",
                    value: "B2"
                },
                {
                    text: "Université Côte d'Azur",
                    value: "B2"
                },
                {
                    text: "Université de Cergy",
                    value: "B2"
                },
                {
                    text: "Université de Lille",
                    value: "B2"
                },
                {
                    text: "Université de Lyon",
                    value: "B2"
                },
                {
                    text: "Université de Paris",
                    value: "B2"
                },
                {
                    text: "Université Paris Dauphine",
                    value: "D2"
                },
                {
                    text: "Université Paris Diderot 7",
                    value: "B2"
                },
                {
                    text: "Université Paris Nanterre",
                    value: "B2"
                },
                {
                    text: "Université Paris Saclay",
                    value: "B2"
                },
                {
                    text: "UPEC",
                    value: "B2"
                }
                ]
            },
            // Question 5
            {
                question: "Votre niveau d'études",
                type: "select",
                answers: [{
                    text: "L3",
                    value: "L3",
                    subquizz: true
                },
                {
                    text: "M1",
                    value: "M1",
                    subquizz: true
                },
                {
                    text: "M2",
                    value: "M2",
                    subquizz: true
                },
                {
                    text: "Bachelor 3 ans",
                    value: "Bachelor 3 ans",
                    subquizz: true
                },
                {
                    text: "Bachelor 4 ans",
                    value: "Bachelor 4 ans",
                    subquizz: true
                }
                ]
            },
            // Question 6
            {
                question: "Nombre de mois d'expérience professionnelle",
                type: "select",
                answers: [{
                    text: "1",
                },
                {
                    text: "2",
                },
                {
                    text: "3",
                },
                {
                    text: "4",
                },
                {
                    text: "5",
                },
                {
                    text: "6",
                },
                {
                    text: "7",
                },
                {
                    text: "8",
                },
                {
                    text: "9",
                },
                {
                    text: "10",
                },
                {
                    text: "11",
                },
                {
                    text: "12",
                },
                {
                    text: "12+",
                }
                ]
            },
            // Question 7
            {
                question: "Nombre de semestres réalisés à l'étranger",
                type: "select",
                answers: [{
                    text: "1",
                },
                {
                    text: "2",
                },
                {
                    text: "3 ou plus",
                }
                ]
            }
        ],

        "ASTI": [{
            question: "Pendant combien d'années ?<br><span class='info'>Si diplôme en cours d'optention, indiquez le nombre total d'années</span>",
            type: "button",
            answers: [{
                text: 1,
                value: -1
            },
            {
                text: 2,
                value: -1
            },
            {
                text: "3 ou plus",
                value: 0
            }
            ]
        }]
    }
    const question = $('#question')
    const answers = $('#answers')
    const result = $('#result')

    let AST = null
    let score = []
    let current = 0
    let currentsubquizz = 0
    const levelOfStudies = ["L1", "L2", "L3", "M1", "M2", "Bachelor 3 ans", "Bachelor 4 ans"]
    let myLevel, toeic, repetition, establishment, faculty, formation, note_N1, note_N2
    let HEC = ESCP = ESSEC = EML = EDHEC = ''
    $$('.AST').forEach(elem => {
        elem.addEventListener('click', function () {
            textarea = $('.eapps-form-element-input-textarea')
            AST = this.value
            textarea.value = $('#quizz h2').textContent.trim() + '\n' + this.value + '\n\n'
            display()
        })
    })

    function display() {
        if (score.reduce((acc, val) => acc + val, 0) < 0) {
            question.innerHTML = 'Inférieur à 3 ans, veuillez nous contacter'
            answers.innerHTML = ''
            return
        }
        else {
            question.innerHTML = ``
            answers.innerHTML = ''
        }
        if (AST == 'AST') {
            question.innerHTML = `Loutil d'analyse n'est pas encore disponible pour les étudiants internationaux. N'hésitez pas à contacter l'équipe Prepaya directement pour plus d'informations sur vos chances.`
            answers.innerHTML = ''
            return
        }
        if (current == quizz[AST].length) {
            question.innerHTML = ''
            question.style.display = 'none'
            answers.innerHTML = ''
            answers.style.display = 'none'
            $('#quizz label').style.display = 'block'
            $('#quizz #submit').style.display = 'block'
            return
        }
        question.innerHTML = quizz[AST][current].question
        answers.innerHTML = ''

        switch (quizz[AST][current].type) {
            case 'button':
                quizz[AST][current].answers.forEach(a => {
                    let value = ''
                    if (a.value) { value = ' value="' + a.value + '"' }
                    const btn = strToDom('<button' + value + '>' + a.text + '</button>')
                    btn.addEventListener('click', function () {
                        textarea.value += $('#quizz h2').textContent.trim() + '<br>' + this.value + '<br><br>'
                        if (AST == 'ASTF') {
                            if (current == 1) {
                                repetition = this.value === 'true'
                            }
                        }

                        score.push(Number(this.value))
                        current++
                        display()
                    })
                    answers.appendChild(btn)
                })
                break
            case 'select':
                const select = document.createElement('select')
                select.innerHTML = '<option>Choisissez...</option>'
                select.addEventListener('input', function () {
                    if (this.options[this.selectedIndex].dataset.subquizz !== 'true') {
                        if (AST == 'ASTF') {
                            if (current == 0) {
                                toeic = Number(this.value)
                            }
                            else if (current == 2) {
                                faculty = this.value
                            }
                            else if (current == 3) {
                                establishment = this.value
                                formation = this.options[this.selectedIndex].textContent
                            }
                            if (current == 2 || current == 3) {
                                textarea.value += $('#quizz h2').textContent.trim() + '<br>' + this.options[this.selectedIndex].textContent + '<br><br>'
                            }
                            else {
                                textarea.value += $('#quizz h2').textContent.trim() + '<br>' + this.value + '<br><br>'
                            }
                        }
                        score.push(Number(this.value))
                        current++
                        display()
                    } else {
                        textarea.value += $('#quizz h2').textContent.trim() + '<br>' + this.value + '<br><br>'
                        myLevel = this.options[this.selectedIndex].textContent
                        displaysubquizz()
                    }
                })
                quizz[AST][current].answers.forEach(a => {
                    let datasubquizz = ''
                    if (a.subquizz) {
                        datasubquizz = 'data-subquizz="' + a.subquizz + '" '
                    }
                    let value = ''
                    if (a.value) { value = ' value="' + a.value + '"' }
                    select.appendChild(strToDom('<option ' + datasubquizz + value + '>' + a.text + '</option>'))
                })
                answers.appendChild(select)
                break
        }
    }

    function displaysubquizz() {
        question.innerHTML = subquizz[AST][currentsubquizz].question.replace(/\$N\-1/, levelOfStudies[levelOfStudies.indexOf(myLevel) - 1]).replace(/\$N\-2/, levelOfStudies[levelOfStudies.indexOf(myLevel) - 2])
        answers.innerHTML = ''

        const select = document.createElement('select')
        select.innerHTML = '<option>Choisissez...</option>'
        select.addEventListener('input', function () {
            score.push(Number(this.value))
            textarea.value += $('#quizz h2').textContent.trim() + '<br>' + this.value + '<br><br>'
            if (currentsubquizz < subquizz[AST].length - 1) {
                note_N1 = Number(this.value)
                currentsubquizz++
                displaysubquizz()
            } else {
                note_N2 = Number(this.value)
                current++
                display()
            }

        })
        subquizz[AST][currentsubquizz].answers.forEach(a => {
            select.appendChild(strToDom('<option data-subquizz="' + a.subquizz + '" value="' + a.value + '">' + a.text + '</option>'))
        })
        answers.appendChild(select)
    }
    function displayResult() {
        // HEC
        // A-A2 
        if (faculty == 'A' && establishment == 'A2') {
            HEC = `<h2>HEC</h2><div>Il est très difficile d'intégrer HEC en provenance d'une formation universitaire française. Nous n'avons malheureusement pas observé de profil similaire au vôtre admis à HEC au cours des dernières années au sein du Programme Grande Ecole. L'excellence académique est une priorité à HEC, et vos notes sont trop basses pour être compensées par un excellent Tage-Mage. Heureusement, il y a d'autres écoles beaucoup plus disposées à recruter des étudiants issus de formations françaises, donc n'hésitez pas à consulter nos commentaires relatifs aux autres écoles du top 5.</div>`
        }
        // A-A2 Si TOEIC >900 et (notes n-2 ou notes n-1 > 14) et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'A' && establishment == 'A2' && Number(toeic) > 900 && (note_N1 > 14 || note_N2 > 14) && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les places sont très chères à HEC, dans la mesure où l'école ne semble pas orienter en priorité ses recrutements vers les étudiants des universités françaises. Vous avez un dossier académiaque de qualité, donc vous pouvez tenter avec un Tage-Mage de 400 minimum, mais cela reste difficile. Pas impossible, mais difficile :).</div>`
        }

        // A-B2 
        if (faculty == 'A' && establishment == 'B2') {
            HEC = `<h2>HEC</h2><div>Il est très difficile d'intégrer HEC en provenance d'une formation universitaire française. Nous n'avons malheureusement pas observé de profil similaire au vôtre admis à HEC au cours des dernières années au sein du Programme Grande Ecole. L'excellence académique est une priorité à HEC, et vos notes sont trop basses pour être compensées par un excellent Tage-Mage. Heureusement, il y a d'autres écoles beaucoup plus disposées à recruter des étudiants issus de formations françaises, donc n'hésitez pas à consulter nos commentaires relatifs aux autres écoles du top 5.</div>`
        }
        // A-B2 Si TOEIC >900 et (notes n-2 ou notes n-1 > 14) et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'A' && establishment == 'B2' && Number(toeic) > 900 && (note_N1 > 14 || note_N2 > 14) && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les places sont très chères à HEC, dans la mesure où l'école ne semble pas orienter en priorité ses recrutements vers les étudiants des universités françaises. Vous avez un dossier académique de qualité, donc vous pouvez tenter avec un Tage-Mage de 400 minimum, mais cela reste difficile. Pas impossible, mais difficile :).</div>`
        }

        // A-D2 
        if (faculty == 'A' && establishment == 'D2') {
            HEC = `<h2>HEC</h2><div>Il est très difficile d'intégrer HEC en provenance d'une formation universitaire française. Nous n'avons malheureusement pas observé de profil similaire au vôtre admis à HEC au cours des dernières années au sein du Programme Grande Ecole. L'excellence académique est une priorité à HEC, et vos notes sont trop basses pour être compensées par un excellent Tage-Mage. Heureusement, il y a d'autres écoles beaucoup plus disposées à recruter des étudiants issus de formations françaises, donc n'hésitez pas à consulter nos commentaires relatifs aux autres écoles du top 5.</div>`
        }
        // A-D2 Si TOEIC >900 et (notes n-2 ou notes n-1 > 14) et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'A' && establishment == 'D2' && Number(toeic) > 900 && (note_N1 > 14 || note_N2 > 14) && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les places sont très chères à HEC, dans la mesure où l'école ne semble pas orienter en priorité ses recrutements vers les étudiants des universités françaises. Vous avez un dossier académiaque de qualité, donc vous pouvez tenter avec un Tage-Mage de 400 minimum, mais cela reste difficile. Pas impossible, mais difficile :). Petite précision : les Dauphinois ne semblent pas être avantagés par rapport aux étudiants des autres Universités; cela marque une différence importante entre HEC et d'autres écoles du top 5.</div>`
        }

        // C-C2 
        // C-C2 / C-F2 tous les cas :
        if (faculty == 'C' && (establishment == 'C2' || establishment == 'F2')) {
            HEC = `<h2>HEC</h2><div>D'après nos informations, aucun élève en provenance d'un bachelor d'école de commerce française n'a été admis au Programme Grande Ecole de HEC Paris au cours des dernières années. Cela semble donc quasiment impossible.</div>`
        }

        // D-A2 
        if (faculty == 'D' && establishment == 'A2') {
            HEC = `<h2>HEC</h2><div>Il est très difficile d'intégrer HEC en provenance d'une formation universitaire française. Nous n'avons malheureusement pas observé de profil similaire au vôtre admis à HEC au cours des dernières années au sein du Programme Grande Ecole. L'excellence académique est une priorité à HEC, et vos notes sont trop basses pour être compensées par un excellent Tage-Mage. Heureusement, il y a d'autres écoles beaucoup plus disposées à recruter des étudiants issus de formations françaises, donc n'hésitez pas à consulter nos commentaires relatifs aux autres écoles du top 5.</div>`
        }
        // D-A2 Si TOEIC >900 et (notes n-2 ou notes n-1 > 14) et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'D' && establishment == 'A2' && Number(toeic) > 900 && (note_N1 > 14 || note_N2 > 14) && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les places sont très chères à HEC, dans la mesure où l'école ne semble pas orienter en priorité ses recrutements vers les étudiants des universités françaises. Vous avez un dossier académiaque de qualité, donc vous pouvez tenter avec un Tage-Mage de 370 minimum, mais cela reste difficile. Pas impossible, mais difficile :).</div>`
        }

        // D-B2 
        if (faculty == 'D' && establishment == 'B2') {
            HEC = `<h2>HEC</h2><div>Il est très difficile d'intégrer HEC en provenance d'une formation universitaire française. Nous n'avons malheureusement pas observé de profil similaire au vôtre admis à HEC au cours des dernières années au sein du Programme Grande Ecole. L'excellence académique est une priorité à HEC, et vos notes sont trop basses pour être compensées par un excellent Tage-Mage. Heureusement, il y a d'autres écoles beaucoup plus disposées à recruter des étudiants issus de formations françaises, donc n'hésitez pas à consulter nos commentaires relatifs aux autres écoles du top 5.</div>`
        }
        // D-B2 Si TOEIC >900 et (notes n-2 ou notes n-1 > 14) et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'D' && establishment == 'B2' && Number(toeic) > 900 && (note_N1 > 14 || note_N2 > 14) && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les places sont très chères à HEC, dans la mesure où l'école ne semble pas orienter en priorité ses recrutements vers les étudiants des universités françaises. Vous avez un dossier académiaque de qualité, donc vous pouvez tenter avec un Tage-Mage de 370 minimum, mais cela reste difficile. Pas impossible, mais difficile :).</div>`
        }

        // D-D2 
        if (faculty == 'D' && establishment == 'D2') {
            HEC = `<h2>HEC</h2><div>Il est très difficile d'intégrer HEC en provenance d'une formation universitaire française. Nous n'avons malheureusement pas observé de profil similaire au vôtre admis à HEC au cours des dernières années au sein du Programme Grande Ecole. L'excellence académique est une priorité à HEC, et vos notes sont trop basses pour être compensées par un excellent Tage-Mage. Heureusement, il y a d'autres écoles beaucoup plus disposées à recruter des étudiants issus de formations françaises, donc n'hésitez pas à consulter nos commentaires relatifs aux autres écoles du top 5.</div>`
        }
        // D-D2 Si TOEIC >900 et (notes n-2 ou notes n-1 > 14) et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'D' && establishment == 'D2' && Number(toeic) > 900 && (note_N1 > 14 || note_N2 > 14) && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les places sont très chères à HEC, dans la mesure où l'école ne semble pas orienter en priorité ses recrutements vers les étudiants des universités françaises. Vous avez un dossier académiaque de qualité, donc vous pouvez tenter avec un Tage-Mage de 370 minimum, mais cela reste difficile. Pas impossible, mais difficile :).</div>`
        }

        // E-B2 
        if (faculty == 'E' && establishment == 'B2') {
            HEC = `<h2>HEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école HEC</div>`
        }
        // E-B2 Si TOEIC >900 et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'E' && establishment == 'B2' && Number(toeic) > 900 && note_N1 > 12 && note_N2 > 12 && repetition == false) {
            HEC = `<h2>HEC</h2><div>HEC a de nombreux partenariats avec des écoles d'ingénieur de premier plan (Polytechnique, Ponts et Chaussées, Telecom Paris, ENSAE etc.). Dans la plupart des écoles de commerce, les ingénieurs sont nettement avantagés par rapport à beaucoup de profils mais ce n'est pas vraiment le cas à HEC. Avec un dossier académique correct, vous pouvez tenter votre chance, mais la probabilité de réussite est faible.</div>`
        }

        // F-E2 
        if (faculty == 'F' && establishment == 'E2') {
            HEC = `<h2>HEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école HEC</div>`
        }
        // F-E2 Si TOEIC >900 et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'E' && establishment == 'B2' && Number(toeic) > 900 && note_N1 > 12 && note_N2 > 12 && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les pharmaciens sont avantagés dans beaucoup d'écoles de commerce. Malheureusement, d'après nos statistiques nous ne constatons pas un appétit marqué de l'école pour les profils pharmas. Vous avez un bon dossier, avec de bons résultats académiques qui témoignent d'un parcours sérieux. Vous pouvez tenter avec un Tage-Mage de 400 minimum, mais la probabilité de réussite reste faible par rapport à des écoles comme l'ESCP ou l'ESSEC.</div>`
        }

        // G-A2 
        if (faculty == 'G' && establishment == 'A2') {
            HEC = `<h2>HEC</h2><div>Il est très difficile d'intégrer HEC en provenance d'une formation universitaire française. Nous n'avons malheureusement pas observé de profil similaire au vôtre admis à HEC au cours des dernières années au sein du Programme Grande Ecole. L'excellence académique est une priorité à HEC, et vos notes sont trop basses pour être compensées par un excellent Tage-Mage. Heureusement, il y a d'autres écoles beaucoup plus disposées à recruter des étudiants issus de formations françaises, donc n'hésitez pas à consulter nos commentaires relatifs aux autres écoles du top 5.</div>`
        }
        // G-A2 Si TOEIC >900 et (notes n-2 ou notes n-1 > 14) et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'G' && establishment == 'A2' && Number(toeic) > 900 && (note_N1 > 14 || note_N2 > 14) && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les places sont très chères à HEC, dans la mesure où l'école ne semble pas orienter en priorité ses recrutements vers les étudiants des universités françaises. Vous avez un dossier académique de qualité, donc vous pouvez tenter avec un Tage-Mage de 400 minimum, mais cela reste difficile. Pas impossible, mais difficile :).</div>`
        }

        // G-B2 
        if (faculty == 'G' && establishment == 'B2') {
            HEC = `<h2>HEC</h2><div>Il est très difficile d'intégrer HEC en provenance d'une formation universitaire française. Nous n'avons malheureusement pas observé de profil similaire au vôtre admis à HEC au cours des dernières années au sein du Programme Grande Ecole. L'excellence académique est une priorité à HEC, et vos notes sont trop basses pour être compensées par un excellent Tage-Mage. Heureusement, il y a d'autres écoles beaucoup plus disposées à recruter des étudiants issus de formations françaises, donc n'hésitez pas à consulter nos commentaires relatifs aux autres écoles du top 5.</div>`
        }
        // G-B2 Si TOEIC >900 et (notes n-2 ou notes n-1 > 14) et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'G' && establishment == 'B2' && Number(toeic) > 900 && (note_N1 > 14 || note_N2 > 14) && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les places sont très chères à HEC, dans la mesure où l'école ne semble pas orienter en priorité ses recrutements vers les étudiants des universités françaises. Vous avez un dossier académiaque de qualité, donc vous pouvez tenter avec un Tage-Mage de 400 minimum, mais cela reste difficile. Pas impossible, mais difficile :). Petite précision : les Dauphinois ne semblent pas être avantagés par rapport aux étudiants des autres Universités; cela marque une différence importante entre HEC et d'autres écoles du top 5.</div>`
        }

        // G-D2 
        if (faculty == 'G' && establishment == 'D2') {
            HEC = `<h2>HEC</h2><div>Il est très difficile d'intégrer HEC en provenance d'une formation universitaire française. Nous n'avons malheureusement pas observé de profil similaire au vôtre admis à HEC au cours des dernières années au sein du Programme Grande Ecole. L'excellence académique est une priorité à HEC, et vos notes sont trop basses pour être compensées par un excellent Tage-Mage. Heureusement, il y a d'autres écoles beaucoup plus disposées à recruter des étudiants issus de formations françaises, donc n'hésitez pas à consulter nos commentaires relatifs aux autres écoles du top 5.</div>`
        }
        // G-D2 Si TOEIC >900 et (notes n-2 ou notes n-1 > 14) et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'G' && establishment == 'D2' && Number(toeic) > 900 && (note_N1 > 14 || note_N2 > 14) && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les places sont très chères à HEC, dans la mesure où l'école ne semble pas orienter en priorité ses recrutements vers les étudiants des universités françaises. Vous avez un dossier académiaque de qualité, donc vous pouvez tenter avec un Tage-Mage de 400 minimum, mais cela reste difficile. Pas impossible, mais difficile :). Petite précision : les Dauphinois ne semblent pas être avantagés par rapport aux étudiants des autres Universités; cela marque une différence importante entre HEC et d'autres écoles du top 5.</div>`
        }

        // H-A2 
        if (faculty == 'H' && establishment == 'A2') {
            HEC = `<h2>HEC</h2><div>Il est très difficile d'intégrer HEC en provenance d'une formation universitaire française. Nous n'avons malheureusement pas observé de profil similaire au vôtre admis à HEC au cours des dernières années au sein du Programme Grande Ecole. L'excellence académique est une priorité à HEC, et vos notes sont trop basses pour être compensées par un excellent Tage-Mage. Heureusement, il y a d'autres écoles beaucoup plus disposées à recruter des étudiants issus de formations françaises, donc n'hésitez pas à consulter nos commentaires relatifs aux autres écoles du top 5.</div>`
        }
        // H-A2 Si TOEIC >900 et (notes n-2 ou notes n-1 > 14) et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'H' && establishment == 'A2' && Number(toeic) > 900 && (note_N1 > 14 || note_N2 > 14) && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les places sont très chères à HEC, dans la mesure où l'école ne semble pas orienter en priorité ses recrutements vers les étudiants des universités françaises. Vous avez un dossier académiaque de qualité, donc vous pouvez tenter avec un Tage-Mage de 370 minimum, mais cela reste difficile. Pas impossible, mais difficile :).</div>`
        }

        // H-B2 
        if (faculty == 'H' && establishment == 'B2') {
            HEC = `<h2>HEC</h2><div>Il est très difficile d'intégrer HEC en provenance d'une formation universitaire française. Nous n'avons malheureusement pas observé de profil similaire au vôtre admis à HEC au cours des dernières années au sein du Programme Grande Ecole. L'excellence académique est une priorité à HEC, et vos notes sont trop basses pour être compensées par un excellent Tage-Mage. Heureusement, il y a d'autres écoles beaucoup plus disposées à recruter des étudiants issus de formations françaises, donc n'hésitez pas à consulter nos commentaires relatifs aux autres écoles du top 5.</div>`
        }
        // H-B2 Si TOEIC >900 et (notes n-2 ou notes n-1 > 14) et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'H' && establishment == 'B2' && Number(toeic) > 900 && (note_N1 > 14 || note_N2 > 14) && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les places sont très chères à HEC, dans la mesure où l'école ne semble pas orienter en priorité ses recrutements vers les étudiants des universités françaises. Vous avez un dossier académiaque de qualité, donc vous pouvez tenter avec un Tage-Mage de 370 minimum, mais cela reste difficile. Pas impossible, mais difficile :).</div>`
        }

        // H-D2 
        if (faculty == 'H' && establishment == 'D2') {
            HEC = `<h2>HEC</h2><div>Il est très difficile d'intégrer HEC en provenance d'une formation universitaire française. Nous n'avons malheureusement pas observé de profil similaire au vôtre admis à HEC au cours des dernières années au sein du Programme Grande Ecole. L'excellence académique est une priorité à HEC, et vos notes sont trop basses pour être compensées par un excellent Tage-Mage. Heureusement, il y a d'autres écoles beaucoup plus disposées à recruter des étudiants issus de formations françaises, donc n'hésitez pas à consulter nos commentaires relatifs aux autres écoles du top 5.</div>`
        }
        // H-D2 Si TOEIC >900 et (notes n-2 ou notes n-1 > 14) et (notes n-2 et notes n-1 > 12) et (redoublement : "non") :
        if (faculty == 'H' && establishment == 'D2' && Number(toeic) > 900 && (note_N1 > 14 || note_N2 > 14) && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            HEC = `<h2>HEC</h2><div>Les places sont très chères à HEC, dans la mesure où l'école ne semble pas orienter en priorité ses recrutements vers les étudiants des universités françaises. Vous avez un dossier académiaque de qualité, donc vous pouvez tenter avec un Tage-Mage de 370 minimum, mais cela reste difficile. Pas impossible, mais difficile :).</div>`
        }

        // ESSEC
        // A-A2 
        if (faculty == 'A' && establishment == 'A2') {
            ESSEC = `<h2>ESSEC</h2><div> Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // A-A2 Si L3
        if (faculty == 'A' && establishment == 'A2' && myLevel == 'L3') {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. M1 minimum.</div>`
        }
        // A-A2 Si niveau d'étude = (M1 ou M2) et (ou(notes n-1 et notes n-2 > 12) ou (notes n-1 > 14)) et redoublement = non
        if (faculty == 'A' && establishment == 'A2' && (myLevel == 'M1' || myLevel == 'M2') && ((note_N1 > 12 && note_N2 > 12) || (note_N1 > 14)) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est correct, mais reste assez léger par rapport aux attentes de l'ESSEC. Avec un très bon Tage-Mage (400 minimum) vous aurez toutes vos chances de compenser pour décrocher une admissibilité !</div>`
        }
        // A-A2 Si scénario 2 ok et (notes n-1 > 13 et notes n-2 >13)
        if (faculty == 'A' && establishment == 'A2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 13 && note_N2 > 13) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est bon et vous pouvez viser l'ESSEC sous réserve d'obtenir un très bon score au Tage-Mage. Nous vous recommandons d'avoir 370 minimum.</div>`
        }
        // A-A2 Si scénario 3 ok et (notes n-1 > 14 et notes n-2 >14)
        if (faculty == 'A' && establishment == 'A2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 14 && note_N2 > 14) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier est très bon. Vous êtes clairement dans le lot des bons candidats à l'ESSEC. Le Tage-Mage est également un élément important dans la candidature donc essayez d'avoir au moins 350 pour être admissible.</div>`
        }

        // A-B2 
        if (faculty == 'A' && establishment == 'B2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // A-B2 Si L3
        if (faculty == 'A' && establishment == 'B2' && myLevel == 'L3') {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. M1 minimum.</div>`
        }
        // A-B2 Si niveau d'étude = (M1 ou M2) et (ou(notes n-1 et notes n-2 > 12) ou (notes n-1 > 14)) et redoublement = non
        if (faculty == 'A' && establishment == 'B2' && (myLevel == 'M1' || myLevel == 'M2') && ((note_N1 > 12 && note_N2 > 12) || (note_N1 > 14)) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est correct, mais reste assez léger par rapport aux attentes de l'ESSEC. Avec un très bon Tage-Mage (400 minimum) vous aurez toutes vos chances de compenser pour décrocher une admissibilité !</div>`
        }
        // A-B2 Si scénario 2 ok et (notes n-1 > 13 et notes n-2 >13)
        if (faculty == 'A' && establishment == 'B2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 13 && note_N2 > 13) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est bon et vous pouvez viser l'ESSEC sous réserve d'obtenir un très bon score au Tage-Mage. Nous vous recommandons d'avoir 370 minimum.</div>`
        }
        // A-B2 Si scénario 3 ok et (notes n-1 > 14 et notes n-2 >14)
        if (faculty == 'A' && establishment == 'B2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 14 && note_N2 > 14) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier est très bon. Vous êtes clairement dans le lot des bons candidats à l'ESSEC. Le Tage-Mage est également un élément important dans la candidature donc essayez d'avoir au moins 350 pour être admissible.</div>`
        }

        // A-D2 
        if (faculty == 'A' && establishment == 'D2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // A-D2 Si L3
        if (faculty == 'A' && establishment == 'D2' && myLevel == 'L3') {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. M1 minimum.</div>`
        }
        // A-D2 Si niveau d'étude = (M1 ou M2) et (ou(notes n-1 et notes n-2 > 11,5) ou (notes n-1 > 13)) et redoublement = non
        if (faculty == 'A' && establishment == 'D2' && (myLevel == 'M1' || myLevel == 'M2') && ((note_N1 > 11.5 && note_N2 > 11.5) || (note_N1 > 13)) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est correct, mais reste assez léger par rapport aux attentes de l'ESSEC. Avec un très bon Tage-Mage (400 minimum) vous aurez toutes vos chances de compenser pour décrocher une admissibilité !</div>`
        }
        // A-D2 Si scénario 2 ok et (notes n-1 > 13 et notes n-2 > 13)
        if (faculty == 'A' && establishment == 'D2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 13 && note_N2 > 13) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est bon et vous pouvez viser l'ESSEC sous réserve d'obtenir un très bon score au Tage-Mage. Nous vous recommandons d'avoir 370 minimum.</div>`
        }
        // A-D2 Si scénario 3 ok et (notes n-1 > 14 et notes n-2 >14)
        if (faculty == 'A' && establishment == 'D2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 14 && note_N2 > 14) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier est très bon. Vous êtes clairement dans le lot des bons candidats à l'ESSEC. Le Tage-Mage est également un élément important dans la candidature donc essayez d'avoir au moins 350 pour être admissible.</div>`
        }

        // C-C2 
        if (faculty == 'C' && establishment == 'C2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // C-C2 Si Bachelor 3 ans
        if (faculty == 'C' && establishment == 'C2' && myLevel == 'Bachelor 3 ans') {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. Bachelor 4 ans uniquement.</div>`
        }
        // C-C2 Bachelor 4 ans et formation = ESSEC, et (notes n-1 et notes n-2 > 15) et redoublement = non
        if (faculty == 'C' && establishment == 'C2' && myLevel == 'Bachelor 4 ans' && formation == 'ESSEC' && (note_N1 > 15 && note_N2 > 15) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Les profils Bachelor école de commerce ne sont, en règle générale, pas admis à l'ESSEC. Votre BBA est l'exception. Malheureusement les places sont rares. Chaque années, quelques étudiants du BBA ESSEC ont la chance d'intégrer le Programme Grande Ecole. Vous avez, d'après nos informations, un excellent dossier. Maximisez votre score de Tage-Mage (400 mini) pour essayer d'être parmi les heureux élus de la prochaine promotion ;).</div>`
        }
        // C-C2 Bachelor 4 ans hors scénario 2
        if ((faculty == 'C' && establishment == 'C2' && myLevel == 'Bachelor 4 ans' && formation !== 'ESSEC') ||
            (faculty == 'C' && establishment == 'C2' && myLevel == 'Bachelor 4 ans' && formation == 'ESSEC' && (note_N1 < 15 && note_N2 < 15) && repetition == false) ||
            (faculty == 'C' && establishment == 'C2' && myLevel == 'Bachelor 4 ans' && formation == 'ESSEC' && (note_N1 > 15 && note_N2 > 15) && repetition == true)
        ) {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusemnt, la situation semble compliquée voire impossible. En dehors d'une poignée de BBA ESSEC triés sur le volet, les BBA ne semblent pas être la priorité de l'ESSEC. D'après nos informations, l'admissibilité parait peu envisageable même avec un excellent score au Tage Mage.</div>`
        }

        // C-F2 
        if (faculty == 'C' && establishment == 'F2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // C-F2 Si Bachelor 3 ans
        if (faculty == 'C' && establishment == 'F2' && myLevel == 'Bachelor 3 ans') {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. Bachelor 4 ans uniquement.</div>`
        }
        // C-F2 Si Bachelor 4 ans
        if (faculty == 'C' && establishment == 'F2' && myLevel == 'Bachelor 4 ans') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusemnt, la situation semble compliquée voire impossible. En dehors d'une poignée de BBA ESSEC triés sur le volet, les BBA ne semblent pas être la priorité de l'ESSEC. D'après nos informations, l'admissibilité parait peu envisageable même avec un excellent score au Tage Mage.</div>`
        }

        // D-A2 
        if (faculty == 'D' && establishment == 'A2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // D-A2 Si L3
        if (faculty == 'D' && establishment == 'A2' && myLevel == 'L3') {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. M1 minimum.</div>`
        }
        // D-A2 Si niveau d'étude = (M1 ou M2) et (ou(notes n-1 et notes n-2 > 11,5) ou (notes n-1 > 13)) et redoublement = non
        if (faculty == 'D' && establishment == 'A2' && (myLevel == 'M1' || myLevel == 'M2') && ((note_N1 > 11.5 && note_N2 > 11.5) || (note_N1 > 13)) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est correct, mais reste assez léger par rapport aux attentes de l'ESSEC. Avec un très bon Tage-Mage (400 minimum) vous aurez toutes vos chances de compenser pour décrocher une admissibilité !</div>`
        }
        // D-A2 Si scénario 2 ok et (notes n-1 > 12 et notes n-2 >12)
        if (faculty == 'D' && establishment == 'A2' && (myLevel == 'M1' || myLevel == 'M2') && note_N1 > 12 && note_N2 > 12 && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est bon et vous pouvez viser l'ESSEC sous réserve d'obtenir un très bon score au Tage-Mage. Nous vous recommandons d'avoir 370 minimum.</div>`
        }
        // D-A2 Si niveau d'étude = (M1 ou M2) et (ou(notes n-1 et notes n-2 > 11,5) ou (notes n-1 > 13)) et redoublement = non
        if (faculty == 'D' && establishment == 'A2' && (myLevel == 'M1' || myLevel == 'M2') && note_N1 > 13 && note_N2 > 13 && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier est très bon. Vous êtes clairement dans le lot des bons candidats à l'ESSEC. Le Tage-Mage est également un élément important dans la candidature donc essayez d'avoir au moins 350 pour être admissible.</div>`
        }

        // D-B2 
        if (faculty == 'D' && establishment == 'B2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // D-B2 Si niveau d'étude = (M1 ou M2) et (ou(notes n-1 et notes n-2 > 11,5) ou (notes n-1 > 13)) et redoublement = non
        if (faculty == 'D' && establishment == 'B2' && (myLevel == 'M1' || myLevel == 'M2') && ((note_N1 > 11.5 && note_N2 > 11.5) || (note_N1 > 13)) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. M1 minimum.</div>`
        }
        // D-B2 Si scénario 2 ok et (notes n-1 > 12 et notes n-2 >12)
        if (faculty == 'D' && establishment == 'B2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est correct, mais reste assez léger par rapport aux attentes de l'ESSEC. Avec un très bon Tage-Mage (400 minimum) vous aurez toutes vos chances de compenser pour décrocher une admissibilité !</div>`
        }


        // D-D2 
        if (faculty == 'D' && establishment == 'D2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // D-D2 Si niveau d'étude = (M1 ou M2) et (ou(notes n-1 et notes n-2 > 11,5) ou (notes n-1 > 13)) et redoublement = non
        if (faculty == 'D' && establishment == 'D2' && (myLevel == 'M1' || myLevel == 'M2') && ((note_N1 > 11.5 && note_N2 > 11.5) || (note_N1 > 13)) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. M1 minimum.</div>`
        }
        // D-D2 Si scénario 2 ok et (notes n-1 > 12 et notes n-2 >12)
        if (faculty == 'D' && establishment == 'D2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est correct, mais reste assez léger par rapport aux attentes de l'ESSEC. Avec un très bon Tage-Mage (400 minimum) vous aurez toutes vos chances de compenser pour décrocher une admissibilité !</div>`
        }


        // E-B2 
        if (faculty == 'E' && establishment == 'B2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // E-B2 Redoublement = oui et (notes n-1 et notes n-2 <= 11,5)
        if (faculty == 'E' && establishment == 'B2' && (note_N1 <= 11.5 && note_N2 <= 11.5) && repetition == true) {
            ESSEC = `<h2>ESSEC</h2><div>Un peu compliqué. Les pharmaciens sont très appréciés à l'ESSEC, mais la concurrence est de plus en plus forte. Votre dossier académique présente certaines vulnérabilités qui pourraient compliquer votre admission. Essayez de dépasser 400 au Tage-Mage pour surmonter ce problème, mais il n'y a pas de garantie.</div>`
        }
        // E-B2 Redoublement = oui hors scénario 1
        if (faculty == 'E' && establishment == 'B2' && (note_N1 > 11.5 || note_N2 > 11.5) && repetition == true) {
            ESSEC = `<h2>ESSEC</h2><div>La présence d'un redoublement est problématique mais pas insurmontable du tout dans le contexte d'une candidature en provenance de la filière pharma. Notez bien que le redoublement de la P1 ne compte pas, veuillez modifier votre formulaire si vous avez répondu oui pour le redoublement dans le questionnaire. Malgré tout, la compétition reste rude et un très bon Tage-Mage de 370 minimum est recommandé pour avoir des chances d'être admissible.</div>`
        }
        // E-B2 Redoublement = non
        if (faculty == 'E' && establishment == 'B2' && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>D'après nos informations vos chances d'intégrer l'ESSEC sont très élevée. Tage-Mage minimum 350, essayez de viser 380 ou plus !</div>`
        }

        // F-E2 
        if (faculty == 'F' && establishment == 'E2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // F-E2 Redoublement = oui et (notes n-1 et notes n-2 <= 11,5)
        if (faculty == 'F' && establishment == 'E2' && (note_N1 <= 11.5 && note_N2 <= 11.5) && repetition == true) {
            ESSEC = `<h2>ESSEC</h2><div>Un peu compliqué. Les ingénieurs sont très appréciés à l'ESSEC, mais la concurrence est de plus en plus forte. Votre dossier académique présente certaines vulnérabilités qui pourraient compliquer votre admission. Essayez de dépasser 400 au Tage-Mage pour surmonter ce problème, mais il n'y a pas de garantie.</div>`
        }
        // F-E2 Redoublement = oui hors scénario 1
        if (faculty == 'F' && establishment == 'E2' && (note_N1 > 11.5 || note_N2 > 11.5) && repetition == true) {
            ESSEC = `<h2>ESSEC</h2><div>La présence d'un redoublement est problématique mais pas insurmontable du tout dans le contexte d'une candidature en provenance d'une école d'ingénieur. Vous avez obtenu de bons résultats par ailleurs, ce qui est très positif. Notez bien que le redoublement de la P1 ne compte pas, veuillez modifier votre formulaire si vous avez répondu oui pour le redoublement dans le questionnaire. Malgré tout, la compétition reste rude et un très bon Tage-Mage de 370 minimum est recommandé pour avoir des chances d'être admissible.</div>`
        }
        // F-E2 Redoublement = non
        if (faculty == 'F' && establishment == 'E2' && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>D'après nos informations vos chances d'intégrer l'ESSEC sont très élevée. Tage-Mage minimum 350, essayez de viser 380 ou plus !</div>`
        }

        // G-A2 
        if (faculty == 'G' && establishment == 'A2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // G-A2 Si L3
        if (faculty == 'G' && establishment == 'A2' && myLevel == 'L3') {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. M1 minimum.</div>`
        }
        // G-A2 Si niveau d'étude = (M1 ou M2) et (ou(notes n-1 et notes n-2 > 11,5) ou (notes n-1 > 13)) et redoublement = non
        if (faculty == 'G' && establishment == 'A2' && (myLevel == 'M1' || myLevel == 'M2') && ((note_N1 > 11.5 && note_N2 < 13) || (note_N1 > 13)) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est correct, mais reste assez léger par rapport aux attentes de l'ESSEC. Avec un très bon Tage-Mage (400 minimum) vous aurez toutes vos chances de compenser pour décrocher une admissibilité !</div>`
        }
        // G-A2 Si scénario 2 ok et (notes n-1 > 12 et notes n-2 >12)
        if (faculty == 'G' && establishment == 'A2' && (myLevel == 'M1' || myLevel == 'M2') && note_N1 > 12 && note_N2 > 12 && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est bon et vous pouvez viser l'ESSEC sous réserve d'obtenir un très bon score au Tage-Mage. Nous vous recommandons d'avoir 370 minimum.</div>`
        }
        // G-A2 Si scénario 3 ok et (notes n-1 > 13 et notes n-2 >13)
        if (faculty == 'G' && establishment == 'A2' && (myLevel == 'M1' || myLevel == 'M2') && note_N1 > 13 && note_N2 > 13 && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier est très bon. Vous êtes clairement dans le lot des bons candidats à l'ESSEC. Le Tage-Mage est également un élément important dans la candidature donc essayez d'avoir au moins 350 pour être admissible.</div>`
        }

        // G-B2 
        if (faculty == 'G' && establishment == 'B2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // G-B2 Si L3
        if (faculty == 'G' && establishment == 'B2' && myLevel == 'L3') {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. M1 minimum.</div>`
        }
        // G-B2 Si niveau d'étude = (M1 ou M2) et (ou(notes n-1 et notes n-2 > 11,5) ou (notes n-1 > 13)) et redoublement = non
        if (faculty == 'G' && establishment == 'B2' && (myLevel == 'M1' || myLevel == 'M2') && ((note_N1 > 11.5 && note_N2 > 11.5) || (note_N1 > 13)) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est correct, mais reste assez léger par rapport aux attentes de l'ESSEC. Avec un très bon Tage-Mage (400 minimum) vous aurez toutes vos chances de compenser pour décrocher une admissibilité !</div>`
        }
        // G-B2 Si scénario 2 ok et (notes n-1 > 12 et notes n-2 >12)
        if (faculty == 'G' && establishment == 'B2' && (myLevel == 'M1' || myLevel == 'M2') && note_N1 > 12 && note_N2 > 12 && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est bon et vous pouvez viser l'ESSEC sous réserve d'obtenir un très bon score au Tage-Mage. Nous vous recommandons d'avoir 370 minimum.</div>`
        }
        // G-B2 Si scénario 2 ok et (notes n-1 > 13 et notes n-2 >13)
        if (faculty == 'G' && establishment == 'B2' && (myLevel == 'M1' || myLevel == 'M2') && note_N1 > 13 && note_N2 > 13 && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier est très bon. Vous êtes clairement dans le lot des bons candidats à l'ESSEC. Le Tage-Mage est également un élément important dans la candidature donc essayez d'avoir au moins 350 pour être admissible.</div>`
        }

        // G-D2 
        if (faculty == 'G' && establishment == 'D2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // G-D2 Si L3
        if (faculty == 'G' && establishment == 'D2' && myLevel == 'L3') {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. M1 minimum.</div>`
        }
        // G-D2 Si niveau d'études = (M1 ou M2) et  redoublement = non
        if (faculty == 'G' && establishment == 'D2' && (myLevel == 'M1' || myLevel == 'M2') && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est correct, mais reste assez léger par rapport aux attentes de l'ESSEC. Avec un très bon Tage-Mage (400 minimum) vous aurez toutes vos chances de compenser pour décrocher une admissibilité !</div>`
        }
        // G-D2 Si scénario 2 ok et (notes n-1 > 13 et notes n-2 >13)
        if (faculty == 'G' && establishment == 'D2' && (myLevel == 'M1' || myLevel == 'M2') && note_N1 > 13 && note_N2 > 13 && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est bon et vous pouvez viser l'ESSEC sous réserve d'obtenir un très bon score au Tage-Mage. Nous vous recommandons d'avoir 370 minimum.</div>`
        }
        // G-D2 Si scénario 2 pas ok
        if (faculty == 'G' && establishment == 'D2' && ((myLevel !== 'M1' && myLevel !== 'M2') || repetition == true)) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier est très bon. Vous êtes clairement dans le lot des bons candidats à l'ESSEC. Le Tage-Mage est également un élément important dans la candidature donc essayez d'avoir au moins 350 pour être admissible.</div>`
        }

        // H-A2 
        if (faculty == 'H' && establishment == 'A2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // H-A2 Si L3
        if (faculty == 'H' && establishment == 'A2' && myLevel == 'L3') {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. M1 minimum.</div>`
        }
        // H-A2 Si niveau d'étude = (M1 ou M2) et (ou(notes n-1 et notes n-2 > 11,5) ou (notes n-1 > 13)) et redoublement = non
        if (faculty == 'H' && establishment == 'A2' && (myLevel == 'M1' || myLevel == 'M2') && ((note_N1 > 11.5 && note_N2 > 11.5) || (note_N1 > 13)) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est correct, mais reste assez léger par rapport aux attentes de l'ESSEC. Avec un très bon Tage-Mage (400 minimum) vous aurez toutes vos chances de compenser pour décrocher une admissibilité !</div>`
        }
        // H-A2 Si scénario 2 ok et (notes n-1 > 12 et notes n-2 >12)
        if (faculty == 'H' && establishment == 'A2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est bon et vous pouvez viser l'ESSEC sous réserve d'obtenir un très bon score au Tage-Mage. Nous vous recommandons d'avoir 370 minimum.</div>`
        }
        // H-A2 Si scénario 3 ok et (notes n-1 > 13 et notes n-2 >13)
        if (faculty == 'H' && establishment == 'A2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 13 && note_N2 > 13) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier est très bon. Vous êtes clairement dans le lot des bons candidats à l'ESSEC. Le Tage-Mage est également un élément important dans la candidature donc essayez d'avoir au moins 350 pour être admissible.</div>`
        }

        // H-B2 
        if (faculty == 'H' && establishment == 'B2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // H-B2 Si L3
        if (faculty == 'H' && establishment == 'B2' && myLevel == 'L3') {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. M1 minimum.</div>`
        }
        // H-B2 Si niveau d'étude = (M1 ou M2) et (ou(notes n-1 et notes n-2 > 11,5) ou (notes n-1 > 13)) et redoublement = non
        if (faculty == 'H' && establishment == 'B2' && (myLevel == 'M1' || myLevel == 'M2') && ((note_N1 > 11.5 && note_N2 > 11.5) || (note_N1 > 13)) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est correct, mais reste assez léger par rapport aux attentes de l'ESSEC. Avec un très bon Tage-Mage (400 minimum) vous aurez toutes vos chances de compenser pour décrocher une admissibilité !</div>`
        }
        // H-B2 Si scénario 2 ok et (notes n-1 > 12 et notes n-2 >12)
        if (faculty == 'H' && establishment == 'B2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est bon et vous pouvez viser l'ESSEC sous réserve d'obtenir un très bon score au Tage-Mage. Nous vous recommandons d'avoir 370 minimum.</div>`
        }
        // H-B2 Si scénario 3 ok et (notes n-1 > 13 et notes n-2 >13)
        if (faculty == 'H' && establishment == 'B2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 13 && note_N2 > 13) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier est très bon. Vous êtes clairement dans le lot des bons candidats à l'ESSEC. Le Tage-Mage est également un élément important dans la candidature donc essayez d'avoir au moins 350 pour être admissible.</div>`
        }

        // H-D2 
        if (faculty == 'H' && establishment == 'D2') {
            ESSEC = `<h2>ESSEC</h2><div>Malheureusement, vos chances pour l'ESSEC semblent assez compromises au regard des éléments communiqués. N'hésitez pas à prendre RDV avec un responsable de la prépa pour échanger davantage au sujet des critères de l'ESSEC.</div>`
        }
        // H-D2 Si L3
        if (faculty == 'H' && establishment == 'D2' && myLevel == 'L3') {
            ESSEC = `<h2>ESSEC</h2><div>Non éligible. M1 minimum.</div>`
        }
        // H-D2 Si niveau d'étude = (M1 ou M2) et (ou(notes n-1 et notes n-2 > 11,5) ou (notes n-1 > 13)) et redoublement = non
        if (faculty == 'H' && establishment == 'D2' && (myLevel == 'M1' || myLevel == 'M2') && ((note_N1 > 11.5 && note_N2 > 11.5) || (note_N1 > 13)) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est correct, mais reste assez léger par rapport aux attentes de l'ESSEC. Avec un très bon Tage-Mage (400 minimum) vous aurez toutes vos chances de compenser pour décrocher une admissibilité !</div>`
        }
        // H-D2 Si scénario 2 ok et (notes n-1 > 12 et notes n-2 >12)
        if (faculty == 'H' && establishment == 'D2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 12 && note_N2 > 12) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier académique est bon et vous pouvez viser l'ESSEC sous réserve d'obtenir un très bon score au Tage-Mage. Nous vous recommandons d'avoir 370 minimum.</div>`
        }
        // H-D2 Si scénario 3 ok et (notes n-1 > 13 et notes n-2 >13)
        if (faculty == 'H' && establishment == 'D2' && (myLevel == 'M1' || myLevel == 'M2') && (note_N1 > 13 && note_N2 > 13) && repetition == false) {
            ESSEC = `<h2>ESSEC</h2><div>Votre dossier est très bon. Vous êtes clairement dans le lot des bons candidats à l'ESSEC. Le Tage-Mage est également un élément important dans la candidature donc essayez d'avoir au moins 350 pour être admissible.</div>`
        }

        // ESCP
        // A-A2 
        if (faculty == 'A' && establishment == 'A2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // A-B2 
        if (faculty == 'A' && establishment == 'B2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // A-D2 
        if (faculty == 'A' && establishment == 'D2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // C-C2 
        if (faculty == 'C' && establishment == 'C2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // C-F2 
        if (faculty == 'C' && establishment == 'F2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // D-A2 
        if (faculty == 'D' && establishment == 'A2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // D-B2 
        if (faculty == 'D' && establishment == 'B2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // D-D2 
        if (faculty == 'D' && establishment == 'D2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // E-B2 
        if (faculty == 'E' && establishment == 'B2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // F-E2 
        if (faculty == 'F' && establishment == 'E2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // G-A2 
        if (faculty == 'G' && establishment == 'A2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // G-B2 
        if (faculty == 'G' && establishment == 'B2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // G-D2 
        if (faculty == 'G' && establishment == 'D2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // H-A2 
        if (faculty == 'H' && establishment == 'A2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // H-B2 
        if (faculty == 'H' && establishment == 'B2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // H-D2 
        if (faculty == 'H' && establishment == 'D2') {
            ESCP = `<h2>ESCP</h2><div>Les analyses pour l'ESCP ne sont pas encore disponibles. N'hésitez pas à prendre contact avec l'équipe Prepaya pour obtenir un avis spécifique pour cette école</div>`
        }

        // EML
        // A-A2 
        if (faculty == 'A' && establishment == 'A2') {
            EML = `<h2>EML</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EML</div>`
        }
        // A-A2 Si M2
        if (faculty == 'A' && establishment == 'A2' && myLevel == 'M2') {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Le niveau d'études est un élément particulièrement important et le fait de présenter un diplôme de niveau M2 représente un énorme avantage. Avec 280 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }
        // A-A2 Si M1
        if (faculty == 'A' && establishment == 'A2' && myLevel == 'M1') {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Le niveau d'études est un élément particulièrement important et le fait de présenter un diplôme de niveau M1 représente un  avantage. Avec 320 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }
        // A-A2 Niveau d'étude = L3 et toeic < 900
        if (faculty == 'A' && establishment == 'A2' && myLevel == 'L3' && toeic < 900) {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Vous êtes issu d'une Université bien notée par l'EM Lyon. Avec 370 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }
        // A-A2 Niveau d'étude = L3 et toeic > 900
        if (faculty == 'A' && establishment == 'A2' && myLevel == 'L3' && toeic > 900) {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Votre TOEIC est bon, et vous êtes issu d'une Université bien notée par l'EM Lyon. Avec 350 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }

        // A-B2 
        if (faculty == 'A' && establishment == 'B2') {
            EML = `<h2>EML</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EML</div>`
        }
        // A-B2 Si M2
        if (faculty == 'A' && establishment == 'B2' && myLevel == 'M2') {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Le niveau d'études est un élément particulièrement important et le fait de présenter un diplôme de niveau M2 représente un énorme avantage. Avec 280 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }
        // A-B2 Si M1
        if (faculty == 'A' && establishment == 'B2' && myLevel == 'M1') {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Le niveau d'études est un élément particulièrement important et le fait de présenter un diplôme de niveau M1 représente un  avantage. Avec 320 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }
        // A-B2 Niveau d'étude= L3 et TOEIC < 900
        if (faculty == 'A' && establishment == 'B2' && myLevel == 'L3' && toeic < 900) {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon à la condition de réussir les tests. Le poids du dossier est important. Avec 400 au Tage-Mage vous pouvez viser une admissibilité sans problème, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge et/ou d'améliorer votre TOEIC qui reste insuffisant. </div>`
        }
        // A-B2 Niveau d'étude= L3 et TOEIC > 900
        if (faculty == 'A' && establishment == 'B2' && myLevel == 'L3' && toeic > 900) {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon à la condition de réussir les tests. Le poids du dossier est important. Avec 370 au Tage-Mage vous pouvez viser une admissibilité sans problème, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir plus de marge.</div>`
        }

        // A-D2 
        if (faculty == 'A' && establishment == 'D2') {
            EML = `<h2>EML</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EML</div>`
        }
        // A-D2 Si M2
        if (faculty == 'A' && establishment == 'D2' && myLevel == 'M2') {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Le niveau d'études est un élément particulièrement important et le fait de présenter un diplôme de niveau M2 représente un énorme avantage. Avec 280 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }
        // A-D2 Niveau d'étude= (M1 ou L3)
        if (faculty == 'A' && establishment == 'D2' && (myLevel == 'M1' || myLevel == 'L3')) {
            EML = `Votre cursus à Dauphine a un impact très positif sur vos chances d'admissibilité à l'EM Lyon. Avec un Tage-Mage de 320 vous pouvez être admissible sans problème.</div>`
        }

        // C-C2 Dans tous les cas même commentaire
        if (faculty == 'C' && establishment == 'C2') {
            EML = `<h2>EML</h2><div>La notation des profils Bachelor est assez aléatoire à l'EM Lyon. Vous avez toutefois un diplôme d'une bonne école qui devrait vous aider à avoir une bonne note. Dans beaucoup de cas 350 au Tage-Mage est un score suffisant pour décrocher l'admissibilité mais par précaution nous vous recommandons d'avoir le plus possible !</div>`
        }

        // C-F2 Dans tous les cas même commentaire
        if (faculty == 'C' && establishment == 'F2') {
            EML = `<h2>EML</h2><div>La notation de profils Bachelor est assez aléatoire à l'EM Lyon. Essayez de faire de votre mieux. Nous recommandons 400 au Tage-Mage pour avoir le plus de chances possibles.</div>`
        }

        // D-A2 
        if (faculty == 'A' && establishment == 'D2') {
            EML = `<h2>EML</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EML</div>`
        }
        // D-A2 Si M2 ou M1
        if (faculty == 'D' && establishment == 'A2' && (myLevel == 'M2' || myLevel == 'M1')) {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Le niveau d'études est un élément particulièrement important et le fait de présenter un diplôme de niveau Master (1 ou 2) représente un énorme avantage. Aussi, votre filière vous permettra d'avoir un petit bonus de points par rapport aux étudiants issus de filières plus traditionnelles (économie, gestion etc.) Avec 300 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }
        // D-A2 Si L3
        if (faculty == 'D' && establishment == 'A2' && myLevel == 'L3') {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Votre filière vous permettra d'avoir un  bonus de points par rapport aux étudiants issus de filières plus traditionnelles (économie, gestion etc.) Avec 320 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }

        // D-B2 
        if (faculty == 'D' && establishment == 'B2') {
            EML = `<h2>EML</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EML</div>`
        }
        // D-B2 Si M2 ou M1
        if (faculty == 'D' && establishment == 'B2' && (myLevel == 'M2' || myLevel == 'M1')) {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Le niveau d'études est un élément particulièrement important et le fait de présenter un diplôme de niveau Master (1 ou 2) représente un énorme avantage. Aussi, votre filière vous permettra d'avoir un petit bonus de points par rapport aux étudiants issus de filières plus traditionnelles (économie, gestion etc.) Avec 300 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }
        // D-B2 Si L3
        if (faculty == 'D' && establishment == 'B2' && myLevel == 'L3') {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Votre filière vous permettra d'avoir un  bonus de points par rapport aux étudiants issus de filières plus traditionnelles (économie, gestion etc.) Avec 320 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }

        // D-D2 
        if (faculty == 'D' && establishment == 'D2') {
            EML = `<h2>EML</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EML</div>`
        }
        // D-D2 Si M2 ou M1
        if (faculty == 'D' && establishment == 'D2' && (myLevel == 'M2' || myLevel == 'M1')) {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Le niveau d'études est un élément particulièrement important et le fait de présenter un diplôme de niveau Master (1 ou 2) représente un énorme avantage. Aussi, votre filière vous permettra d'avoir un petit bonus de points par rapport aux étudiants issus de filières plus traditionnelles (économie, gestion etc.). Enfin, le fait de présenter un diplôme de l'Université Paris Dauphine est un élément très important. Avec 280 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }
        // D-D2 Si L3
        if (faculty == 'D' && establishment == 'D2' && myLevel == 'L3') {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Votre filière vous permettra d'avoir un  bonus de points par rapport aux étudiants issus de filières plus traditionnelles (économie, gestion etc.). Le poids de l'Université Paris Dauphine dans l'évaluation du dossier est également un élément notable. Avec 320 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }

        // E-B2 OK dans tous les cas
        if (faculty == 'E' && establishment == 'B2') {
            EML = `<h2>EML</h2><div>Les pharmaciens sont particulièrement appréciés à l'EM Lyon. Vous aurez très certainement une très bonne note au dossier vous permettant d'avoir une admissibilité à l'EM Lyon malgré un Tage-Mage de l'ordre de 250.</div>`
        }

        // F-E2 OK dans tous les cas
        if (faculty == 'F' && establishment == 'E2') {
            EML = `<h2>EML</h2><div>Les ingénieurs sont particulièrement appréciés à l'EM Lyon. Vous aurez très certainement une très bonne note au dossier vous permettant d'avoir une admissibilité à l'EM Lyon malgré un Tage-Mage de l'ordre de 250. Nous vous recommandons toutefois d'atteindre le score le plus élevé possible pour avoir plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }

        // G-A2 OK dans tous les cas
        if (faculty == 'G' && establishment == 'A2') {
            EML = `<h2>EML</h2><div>Les profils scientifiques sont particulièrement appréciés à l'EM Lyon. Vous aurez très certainement une très bonne note au dossier vous permettant d'être admissible sans aucun problème. 280 au Tage-Mage suffira largement pour être admissible, même si nous recommandons d'avoir le score le plus élevé possible pour conserver une bonne marge pour l'admission finale.</div>`
        }

        // G-B2 OK dans tous les cas
        if (faculty == 'G' && establishment == 'B2') {
            EML = `<h2>EML</h2><div>Les profils scientifiques sont particulièrement appréciés à l'EM Lyon. Vous aurez très certainement une très bonne note au dossier vous permettant d'être admissible sans aucun problème. 280 au Tage-Mage suffira largement pour être admissible, même si nous recommandons d'avoir le score le plus élevé possible pour conserver une bonne marge pour l'admission finale.</div>`
        }

        // G-D2 OK dans tous les cas
        if (faculty == 'G' && establishment == 'D2') {
            EML = `<h2>EML</h2><div>Les profils scientifiques, a fortiori de l'Université Paris Dauphine, sont particulièrement appréciés à l'EM Lyon. Vous aurez très certainement une très bonne note au dossier vous permettant d'être admissible sans aucun problème. 250 au Tage-Mage suffira largement pour être admissible, même si nous recommandons d'avoir le score le plus élevé possible pour conserver une bonne marge pour l'admission finale.</div>`
        }

        // H-A2 
        if (faculty == 'H' && establishment == 'A2') {
            EML = `<h2>EML</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EML</div>`
        }
        // H-A2 Si M2 ou M1
        if (faculty == 'H' && establishment == 'A2' && (myLevel == 'M2' || myLevel == 'M1')) {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Le niveau d'études est un élément particulièrement important et le fait de présenter un diplôme de niveau Master (1 ou 2) représente un énorme avantage. Aussi, votre filière vous permettra d'avoir un petit bonus de points par rapport aux étudiants issus de filières plus traditionnelles (économie, gestion etc.) Avec 300 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }
        // H-A2 Si L3
        if (faculty == 'H' && establishment == 'A2' && myLevel == 'L3') {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Votre filière vous permettra d'avoir un  bonus de points par rapport aux étudiants issus de filières plus traditionnelles (économie, gestion etc.) Avec 320 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }

        // H-B2 
        if (faculty == 'H' && establishment == 'B2') {
            EML = `<h2>EML</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EML</div>`
        }
        // H-B2 Si M2 ou M1
        if (faculty == 'H' && establishment == 'B2' && (myLevel == 'M2' || myLevel == 'M1')) {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Le niveau d'études est un élément particulièrement important et le fait de présenter un diplôme de niveau Master (1 ou 2) représente un énorme avantage. Aussi, votre filière vous permettra d'avoir un petit bonus de points par rapport aux étudiants issus de filières plus traditionnelles (économie, gestion etc.) Avec 300 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }
        // H-B2 Si L3
        if (faculty == 'H' && establishment == 'B2' && myLevel == 'L3') {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Votre filière vous permettra d'avoir un  bonus de points par rapport aux étudiants issus de filières plus traditionnelles (économie, gestion etc.) Avec 320 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }

        // H-D2 
        if (faculty == 'H' && establishment == 'D2') {
            EML = `<h2>EML</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EML</div>`
        }
        // H-D2 Si M2 ou M1
        if (faculty == 'H' && establishment == 'D2' && (myLevel == 'M2' || myLevel == 'M1')) {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Le niveau d'études est un élément particulièrement important et le fait de présenter un diplôme de niveau Master (1 ou 2) représente un énorme avantage. Aussi, votre filière vous permettra d'avoir un petit bonus de points par rapport aux étudiants issus de filières plus traditionnelles (économie, gestion etc.) Avec 300 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }
        // H-D2 Si L3
        if (faculty == 'H' && establishment == 'D2' && myLevel == 'L3') {
            EML = `<h2>EML</h2><div>Compte tenu des informations communiquées, vous pouvez intégrer l'EM Lyon sans difficulté. Votre filière vous permettra d'avoir un  bonus de points par rapport aux étudiants issus de filières plus traditionnelles (économie, gestion etc.). Le poids de l'Université Paris Dauphine dans l'évaluation du dossier est également un élément notable. Avec 320 au Tage-Mage vous pouvez viser une admissibilité, même si nous vous recommandons d'atteindre le score le plus élevé possible pour avoir le plus de marge. En effet, être admissible est une chose, mais il ne faut pas oublier que le classement final se base également sur les résultats obtenus à l'admissibilité !</div>`
        }

        // EDHEC
        // A-A2 
        if (faculty == 'A' && establishment == 'A2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // A-A2 Si TOEIC < 900 et (notes n-1 >= 14)
        if (faculty == 'A' && establishment == 'A2' && toeic < 900 && note_N1 >= 14) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera difficilement accessible. Il est impératif de viser un TOEIC plus haut. Néanmoins, vous avez un très bon dossier académique qui pourrait dans certains cas déclencher un bonus de points. Si vous obtenez ce bonus, l'admissibilité est jouable avec un bon Tage-Mage de 400 ou plus, mais nous considérons qu'il est plus prudent pour vous d'améliorer votre niveau d'anglais.</div>`
        }
        // A-A2 Si TOEIC < 900 et (notes n-1 < 14)
        if (faculty == 'A' && establishment == 'A2' && toeic < 900 && note_N1 < 14) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC ne sera pas accessible. Il est impératif de viser un TOEIC plus haut. Vous pouvez refaire une simulation avec une autre projection de TOEIC pour observer la différence. Même avec un score de Tage-Mage supérieur à 400, cela ne passera pas.</div>`
        }
        // A-A2 Si TOEIC (900-945)
        if (faculty == 'A' && establishment == 'A2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>On y est presque. L'EDHEC est potentiellement accessible sur la base des informations communiquées. Nous attirons néanmoins votre attention sur la forte sévérité du barème de notation du TOEIC. Si vous vous situé dans la tranche basse de score (entre 900 et 925), les chances d'admissibilité sont quasi nulles. Si votre score de TOEIC dépasse 925 l'admissibilité devient jouable avec un score de Tage-Mage de plus de 400 . Nous vous conseillons donc d'améliorer significativement votre score de TOEIC. Les candidats avec votre profil académique admissibles à l'EDHEC avec un TOEIC aussi bas sont relativement rares.</div>`
        }
        // A-A2 Si TOEIC (945-965)
        if (faculty == 'A' && establishment == 'A2' && toeic > 945 && toeic < 965) {
            EDHEC = `<h2>EDHEC</h2><div>C'est correct, mais cela reste un peu juste. Sur la base des informations communiquées, l'admissibilité devient envisageable à partir d'un score minimum de 370. Pour optimiser vos chances, nous vous conseillons d'améliorer votre TOEIC même s'il peut vous sembler déjà très élevé. Sinon avec un  Tage-Mage de 400 minimum, vous serez admissible sans trop de difficultés.</div>`
        }
        // A-A2 Si TOEIC > 965
        if (faculty == 'A' && establishment == 'A2' && toeic > 965) {
            EDHEC = `<h2>EDHEC</h2><div>Très bonne nouvelle. Même si votre profil académique n'est pas le plus recherché par l'EDHEC, vous compensez beaucoup grâce au TOEIC notamment. Sur cette base, vous pouvez atteindre confortablement l'admissibilité avec un score de 3702. Si vous atteignez en particulier 980 ou plus au TOEIC,l'admissibilité peut devenir jouable dès 340.</div>`
        }

        // A-B2 
        if (faculty == 'A' && establishment == 'B2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // A-B2 Si TOEIC < 900>
        if (faculty == 'A' && establishment == 'B2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC ne sera pas accessible. Il est impératif de viser un TOEIC plus haut. Vous pouvez refaire une simulation avec une autre projection de TOEIC pour observer la différence.</div>`
        }
        // A-B2 Si TOEIC (900-945)
        if (faculty == 'A' && establishment == 'B2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>On y est presque. L'EDHEC est potentiellement accessible sur la base des informations communiquées. Nous attirons néanmoins votre attention sur la forte sévérité du barème de notation du TOEIC. Si vous vous situé dans la tranche basse de score (entre 900 et 925), les chances d'admissibilité sont quasi nulles. Si votre score de TOEIC dépasse 925 l'admissibilité devient jouable avec un score de Tage-Mage de plus de 400 . Nous vous conseillons donc d'améliorer significativement votre score de TOEIC. Les candidats avec votre profil académique admissibles à l'EDHEC avec un TOEIC aussi bas sont relativement rares.</div>`
        }
        // A-B2 Si TOEIC (945-965)
        if (faculty == 'A' && establishment == 'B2' && toeic > 945 && toeic < 965) {
            EDHEC = `<h2>EDHEC</h2><div>C'est correct, mais cela reste un peu juste. Sur la base des informations communiquées, l'admissibilité devient envisageable à partir d'un score minimum de 370. Pour optimiser vos chances, nous vous conseillons d'améliorer votre TOEIC même s'il peut vous sembler déjà très élevé. Sinon avec un  Tage-Mage de 400 minimum, vous serez admissible sans trop de difficultés.</div>`
        }
        // A-B2 Si TOEIC > 965
        if (faculty == 'A' && establishment == 'B2' && toeic > 965) {
            EDHEC = `<h2>EDHEC</h2><div>Très bonne nouvelle. Même si votre profil académique n'est pas le plus recherché par l'EDHEC, vous compensez beaucoup grâce au TOEIC notamment. Sur cette base, vous pouvez atteindre confortablement l'admissibilité avec un score de 3702. Si vous atteignez en particulier 980 ou plus au TOEIC,l'admissibilité peut devenir jouable dès 340.</div>`
        }

        // A-D2 
        if (faculty == 'A' && establishment == 'D2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // A-D2 Si TOEIC < 900>
        if (faculty == 'A' && establishment == 'D2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC est accessible. Il est recommandé de viser un TOEIC plus haut. Grâce à votre diplôme de Dauphine, vous pouvez prétendre à une note de dossier largement supérieure à celle octroyée aux étudiants d'autres universités Parisiennes. Avec un  Tage-Mage de 370 minimum c'est possible, mais ne jouez pas avec le feu et repassez votre TOEIC pour l'améliorer :).</div>`
        }
        // A-D2 Si TOEIC (900-945)
        if (faculty == 'A' && establishment == 'D2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. En tant qu'étudiant de l'Université Paris-Dauphine, vous avez un avantage majeur par rapport aux autres étudiants. Vous pouvez être admissible avec un Tage-Mage de 300. Nous vous recommandons de viser 340 pour avoir une bonne marge ou d'améliorer votre TOEIC qui est déjà bon !</div>`
        }
        // A-D2 Si TOEIC > 945
        if (faculty == 'A' && establishment == 'D2' && toeic > 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. En tant qu'étudiant de l'Université Paris-Dauphine, vous avez un avantage majeur par rapport aux autres étudiants. Vous pouvez être admissible avec un bon classement avec un Tage-Mage de 300. Cela dit nous vous conseillons d'anticiper les épreuves orales et de viser les scores les plus élevés possibles pour optimiser votre classement final (après les oraux).</div>`
        }

        // C-C2 
        if (faculty == 'C' && establishment == 'C2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // C-C2 Si TOEIC < 900>
        if (faculty == 'C' && establishment == 'C2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>L'EDHEC n'est malheureusement pas très friande des profils BBA. Sur la base de vos informations, même un score de plus de 400 au Tage-Mage ne vous permettrait pas d'être admissible. Pour compenser votre dossier, vous devez absolument obtenir un score minimum de 965 au TOEIC.</div>`
        }
        // C-C2 Si TOEIC (900-945)
        if (faculty == 'C' && establishment == 'C2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>L'EDHEC n'est malheureusement pas très friande des profils BBA. Sur la base de vos informations, même un score de plus de 400 au Tage-Mage ne vous permettrait pas d'être admissible. Pour compenser votre dossier, vous devez absolument obtenir un score minimum de 965 au TOEIC.</div>`
        }
        // C-C2 Si TOEIC (945-965)
        if (faculty == 'C' && establishment == 'C2' && toeic > 945 && toeic < 965) {
            EDHEC = `<h2>EDHEC</h2><div>On y est presque. C'est plus difficile d'intégrer l'EDHEC en provenance d'un bachelor d'école de commerce que d'une filière universitaire. Un Tage-Mage de 400 minimum pourrait vous permettre d'être admissible, mais nous vous conseillons d'améliorer votre TOEIC et d'essayer d'atteindre 980.</div>`
        }
        // C-C2 Si TOEIC > 965
        if (faculty == 'C' && establishment == 'C2' && toeic > 965) {
            EDHEC = `<h2>EDHEC</h2><div>Accrochez-vous. C'est plus difficile d'intégrer l'EDHEC en provenance d'un bachelor d'école de commerce que d'une filière universitaire. Néanmoins, grâce à votre TOEIC élevé complété par un Tage-Mage de 370 minimum vous pouvez espérer une admissiblité. Nous recommandons toutefois d'atteindre 400 pour plus de confort.</div>`
        }

        // C-F2 
        if (faculty == 'C' && establishment == 'F2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // C-F2 Si TOEIC < 900>
        if (faculty == 'C' && establishment == 'F2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>L'EDHEC n'est malheureusement pas très friande des profils BBA. Sur la base de vos informations, même un score de plus de 400 au Tage-Mage ne vous permettrait pas d'être admissible. Pour compenser votre dossier, vous devez absolument obtenir un score minimum de 965 au TOEIC.</div>`
        }
        // C-F2 Si TOEIC (900-945)
        if (faculty == 'C' && establishment == 'F2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>L'EDHEC n'est malheureusement pas très friande des profils BBA. Sur la base de vos informations, même un score de plus de 400 au Tage-Mage ne vous permettrait pas d'être admissible. Pour compenser votre dossier, vous devez absolument obtenir un score minimum de 965 au TOEIC.</div>`
        }
        // C-F2 Si TOEIC (945-965)
        if (faculty == 'C' && establishment == 'F2' && toeic > 945 && toeic < 965) {
            EDHEC = `<h2>EDHEC</h2><div>On y est presque. C'est plus difficile d'intégrer l'EDHEC en provenance d'un bachelor d'école de commerce que d'une filière universitaire. Un Tage-Mage de 400 minimum pourrait vous permettre d'être admissible, mais nous vous conseillons d'améliorer votre TOEIC et d'essayer d'atteindre 980.</div>`
        }
        // C-F2 Si TOEIC > 965
        if (faculty == 'C' && establishment == 'F2' && toeic > 965) {
            EDHEC = `<h2>EDHEC</h2><div>Accrochez-vous. C'est plus difficile d'intégrer l'EDHEC en provenance d'un bachelor d'école de commerce que d'une filière universitaire. Néanmoins, grâce à votre TOEIC élevé complété par un Tage-Mage de 370 minimum vous pouvez espérer une admissiblité. Nous recommandons toutefois d'atteindre 400 pour plus de confort.</div>`
        }

        // D-A2 
        if (faculty == 'D' && establishment == 'A2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // D-A2 Si TOEIC < 900>
        if (faculty == 'D' && establishment == 'A2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>On y est presque. L'EDHEC est potentiellement accessible sur la base des informations communiquées. Nous attirons néanmoins votre attention sur la forte sévérité du barème de notation du TOEIC. L'admissibilité devient jouable avec un score de Tage-Mage  de 400, sous réserve que votre TOEIC reste proche de 900. Nous vous conseillons donc d'améliorer significativement votre score de TOEIC. </div>`
        }
        // D-A2 Si TOEIC (900-945)
        if (faculty == 'D' && establishment == 'A2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible.Vous pouvez être admissible avec un Tage-Mage de 340. Nous vous recommandons de viser 370 pour avoir une bonne marge ou d'améliorer votre TOEIC qui est déjà bon !</div>`
        }
        // D-A2 Si TOEIC > 945
        if (faculty == 'D' && establishment == 'A2' && toeic > 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. Vous pouvez être admissible avec un bon classement avec un Tage-Mage de 340. Cela dit nous vous conseillons d'anticiper les épreuves orales et de viser les scores les plus élevés possibles pour optimiser votre classement final (après les oraux).</div>`
        }

        // D-B2 
        if (faculty == 'D' && establishment == 'B2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // D-B2 Si TOEIC < 900>
        if (faculty == 'D' && establishment == 'B2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>On y est presque. L'EDHEC est potentiellement accessible sur la base des informations communiquées. Nous attirons néanmoins votre attention sur la forte sévérité du barème de notation du TOEIC. L'admissibilité devient jouable avec un score de Tage-Mage  de 400, sous réserve que votre TOEIC reste proche de 900. Nous vous conseillons donc d'améliorer significativement votre score de TOEIC. </div>`
        }
        // D-B2 Si TOEIC (900-945)
        if (faculty == 'D' && establishment == 'B2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. Vous pouvez être admissible avec un Tage-Mage de 300. Nous vous recommandons de viser 340 pour avoir une bonne marge ou d'améliorer votre TOEIC qui est déjà bon !</div>`
        }
        // D-B2 Si TOEIC > 945
        if (faculty == 'D' && establishment == 'B2' && toeic > 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible.  Vous pouvez être admissible avec un bon classement avec un Tage-Mage de 300. Cela dit nous vous conseillons d'anticiper les épreuves orales et de viser les scores les plus élevés possibles pour optimiser votre classement final (après les oraux).</div>`
        }

        // D-D2 
        if (faculty == 'D' && establishment == 'D2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // D-D2 Si TOEIC < 900>
        if (faculty == 'D' && establishment == 'D2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC est accessible. Il est recommandé de viser un TOEIC plus haut. Grâce à votre diplôme de Dauphine, vous pouvez prétendre à une note de dossier largement supérieure à celle octroyée aux étudiants d'autres universités Parisiennes. Avec un  Tage-Mage de 370 minimum c'est possible, mais ne jouez pas avec le feu et repassez votre TOEIC pour l'améliorer :).</div>`
        }
        // D-D2 Si TOEIC (900-945)
        if (faculty == 'D' && establishment == 'D2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. En tant qu'étudiant de l'Université Paris-Dauphine, vous avez un avantage majeur par rapport aux autres étudiants. Vous pouvez être admissible avec un Tage-Mage de 300. Nous vous recommandons de viser 340 pour avoir une bonne marge ou d'améliorer votre TOEIC qui est déjà bon !</div>`
        }
        // D-D2 Si TOEIC > 945
        if (faculty == 'D' && establishment == 'D2' && toeic > 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. Vous pouvez être admissible avec un bon classement avec un Tage-Mage de 300. Cela dit nous vous conseillons d'anticiper les épreuves orales et de viser les scores les plus élevés possibles pour optimiser votre classement final (après les oraux).</div>`
        }

        // E-B2 
        if (faculty == 'E' && establishment == 'B2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // E-B2 Si TOEIC < 900>
        if (faculty == 'E' && establishment == 'B2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>Les pharmaciens sont particulièrement appréciés à l'EDHEC. Vous aurez très certainement une très bonne note au dossier vous permettant d'avoir une admissibilité à l'EDHEC malgré un Tage-Mage de l'ordre de 300. Attention toutefois à vous rapprocher le plus possible du score de 900.</div>`
        }
        // E-B2 Si TOEIC > 900
        if (faculty == 'E' && establishment == 'B2' && toeic > 900) {
            EDHEC = `<h2>EDHEC</h2><div>Le profil pharma est très valorisé à l'EDHEC, compte-tenu des autres éléments de votre dossier vous pouvez viser une admissibilité très confortable avec un score de 300. Néanmoins, ne vous limitez pas à cet objectif et prenez de la marge pour l'étape d'après : les oraux d'admission !</div>`
        }

        // F-E2 
        if (faculty == 'F' && establishment == 'E2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // F-E2 Si TOEIC < 900>
        if (faculty == 'F' && establishment == 'E2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>Les ingénieurs sont particulièrement appréciés à l'EDHEC. Vous aurez très certainement une très bonne note au dossier vous permettant d'avoir une admissibilité à l'EDHEC malgré un Tage-Mage de l'ordre de 300. Attention toutefois à vous rapprocher le plus possible du score de 900.</div>`
        }
        // F-E2 Si TOEIC > 900
        if (faculty == 'F' && establishment == 'E2' && toeic > 900) {
            EDHEC = `<h2>EDHEC</h2><div>Le profil ingénieur est très valorisé à l'EDHEC, compte-tenu des autres éléments de votre dossier vous pouvez viser une admissibilité très confortable avec un score de 300. Néanmoins, ne vous limitez pas à cet objectif et prenez de la marge pour l'étape d'après : les oraux d'admission !</div>`
        }

        // G-A2 
        if (faculty == 'G' && establishment == 'A2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // G-A2 Si TOEIC < 900>
        if (faculty == 'G' && establishment == 'A2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC est accessible. Il est recommandé de viser un TOEIC plus haut. Grâce à votre diplôme très recherché, vous pouvez prétendre à une note de dossier largement supérieure à celle octroyée aux étudiants d'autres filières plus classiques. Avec un  Tage-Mage de 370 minimum c'est possible, mais ne jouez pas avec le feu et repassez votre TOEIC pour l'améliorer :).</div>`
        }
        // G-A2 Si TOEIC (900-945)
        if (faculty == 'G' && establishment == 'A2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. En tant qu'étudiant scientifique, vous avez un avantage majeur par rapport aux autres étudiants. Vous pouvez être admissible avec un Tage-Mage de 300. Nous vous recommandons de viser 340 pour avoir une bonne marge ou d'améliorer votre TOEIC qui est déjà bon !</div>`
        }
        // G-A2 Si TOEIC > 945
        if (faculty == 'G' && establishment == 'A2' && toeic > 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. En tant qu'étudiant issu d'une filière scientifique, vous avez un avantage majeur par rapport aux autres étudiants. Vous pouvez être admissible avec un bon classement avec un Tage-Mage de 300. Cela dit nous vous conseillons d'anticiper les épreuves orales et de viser les scores les plus élevés possibles pour optimiser votre classement final (après les oraux).</div>`
        }

        // G-B2 
        if (faculty == 'G' && establishment == 'B2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // G-B2 Si TOEIC < 900>
        if (faculty == 'G' && establishment == 'B2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC est accessible. Il est recommandé de viser un TOEIC plus haut. Grâce à votre diplôme très recherché, vous pouvez prétendre à une note de dossier largement supérieure à celle octroyée aux étudiants d'autres filières plus classiques. Avec un  Tage-Mage de 370 minimum c'est possible, mais ne jouez pas avec le feu et repassez votre TOEIC pour l'améliorer :).</div>`
        }
        // G-B2 Si TOEIC (900-945)
        if (faculty == 'G' && establishment == 'B2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. En tant qu'étudiant scientifique, vous avez un avantage majeur par rapport aux autres étudiants. Vous pouvez être admissible avec un Tage-Mage de 300. Nous vous recommandons de viser 340 pour avoir une bonne marge ou d'améliorer votre TOEIC qui est déjà bon !</div>`
        }
        // G-B2 Si TOEIC > 945
        if (faculty == 'G' && establishment == 'B2' && toeic > 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. En tant qu'étudiant issu d'une filière scientifique, vous avez un avantage majeur par rapport aux autres étudiants. Vous pouvez être admissible avec un bon classement avec un Tage-Mage de 300. Cela dit nous vous conseillons d'anticiper les épreuves orales et de viser les scores les plus élevés possibles pour optimiser votre classement final (après les oraux).</div>`
        }

        // G-D2 
        if (faculty == 'G' && establishment == 'D2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // G-D2 Si TOEIC <= 900
        if (faculty == 'G' && establishment == 'D2' && toeic <= 900) {
            EDHEC = `<h2>EDHEC</h2><div>D'après l'analyse de votre profil, vous avez un parcours particulièrement intéressant pour l'EDHEC grâce au prestige de Dauphine d'une part et grâce à votre filière scientifique d'autre part. Vous aurez très certainement une très bonne note au dossier vous permettant d'avoir une admissibilité à l'EDHEC malgré un Tage-Mage de l'ordre de 300. Attention toutefois à vous rapprocher le plus possible du score de 900.</div>`
        }
        // G-D2 Si TOEIC > 900
        if (faculty == 'G' && establishment == 'D2' && toeic > 900) {
            EDHEC = `<h2>EDHEC</h2><div>Le profil ingénieur est très valorisé à l'EDHEC, compte-tenu des autres éléments de votre dossier vous pouvez viser une admissibilité très confortable avec un score de 300. Néanmoins, ne vous limitez pas à cet objectif et prenez de la marge pour l'étape d'après : les oraux d'admission !</div>`
        }

        // H-A2 
        if (faculty == 'H' && establishment == 'A2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // H-A2 Si TOEIC < 900>
        if (faculty == 'H' && establishment == 'A2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>On y est presque. L'EDHEC est potentiellement accessible sur la base des informations communiquées. Nous attirons néanmoins votre attention sur la forte sévérité du barème de notation du TOEIC. L'admissibilité devient jouable avec un score de Tage-Mage  de 400, sous réserve que votre TOEIC reste proche de 900. Nous vous conseillons donc d'améliorer significativement votre score de TOEIC. </div>`
        }
        // H-A2 Si TOEIC (900-945)
        if (faculty == 'H' && establishment == 'A2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible.Vous pouvez être admissible avec un Tage-Mage de 340. Nous vous recommandons de viser 370 pour avoir une bonne marge ou d'améliorer votre TOEIC qui est déjà bon !</div>`
        }
        // H-A2 Si TOEIC > 945
        if (faculty == 'H' && establishment == 'A2' && toeic > 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. Vous pouvez être admissible avec un bon classement avec un Tage-Mage de 340. Cela dit nous vous conseillons d'anticiper les épreuves orales et de viser les scores les plus élevés possibles pour optimiser votre classement final (après les oraux).</div>`
        }

        // H-B2 
        if (faculty == 'H' && establishment == 'B2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // H-B2 Si TOEIC < 900>
        if (faculty == 'H' && establishment == 'B2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>On y est presque. L'EDHEC est potentiellement accessible sur la base des informations communiquées. Nous attirons néanmoins votre attention sur la forte sévérité du barème de notation du TOEIC. L'admissibilité devient jouable avec un score de Tage-Mage  de 400, sous réserve que votre TOEIC reste proche de 900. Nous vous conseillons donc d'améliorer significativement votre score de TOEIC. </div>`
        }
        // H-B2 Si TOEIC (900-945)
        if (faculty == 'H' && establishment == 'B2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. Vous pouvez être admissible avec un Tage-Mage de 300. Nous vous recommandons de viser 340 pour avoir une bonne marge ou d'améliorer votre TOEIC qui est déjà bon !</div>`
        }
        // H-B2 Si TOEIC > 945
        if (faculty == 'H' && establishment == 'B2' && toeic > 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible.  Vous pouvez être admissible avec un bon classement avec un Tage-Mage de 300. Cela dit nous vous conseillons d'anticiper les épreuves orales et de viser les scores les plus élevés possibles pour optimiser votre classement final (après les oraux).</div>`
        }

        // H-D2 
        if (faculty == 'H' && establishment == 'D2') {
            EDHEC = `<h2>EDHEC</h2><div>Malheureusement il y a eu un problème dans le traitement de vos données, l'équipe de Prepaya vous enverra un mail dans la journée pour vous transmettre un avis sur vos chances pour intégrer l'école EDHEC</div>`
        }
        // H-D2 Si TOEIC < 900>
        if (faculty == 'H' && establishment == 'D2' && toeic < 900) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC est accessible. Il est recommandé de viser un TOEIC plus haut. Grâce à votre diplôme de Dauphine, vous pouvez prétendre à une note de dossier largement supérieure à celle octroyée aux étudiants d'autres universités Parisiennes. Avec un  Tage-Mage de 370 minimum c'est possible, mais ne jouez pas avec le feu et repassez votre TOEIC pour l'améliorer :).</div>`
        }
        // H-D2 Si TOEIC (900-945)
        if (faculty == 'H' && establishment == 'D2' && toeic > 900 && toeic < 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. En tant qu'étudiant de l'Université Paris-Dauphine, vous avez un avantage majeur par rapport aux autres étudiants. Vous pouvez être admissible avec un Tage-Mage de 300. Nous vous recommandons de viser 340 pour avoir une bonne marge ou d'améliorer votre TOEIC qui est déjà bon !</div>`
        }
        // H-D2 Si TOEIC > 945
        if (faculty == 'H' && establishment == 'D2' && toeic > 945) {
            EDHEC = `<h2>EDHEC</h2><div>Compte tenu de vos informations, l'EDHEC sera très accessible. Vous pouvez être admissible avec un bon classement avec un Tage-Mage de 300. Cela dit nous vous conseillons d'anticiper les épreuves orales et de viser les scores les plus élevés possibles pour optimiser votre classement final (après les oraux).</div>`
        }

        result.innerHTML = HEC + ESCP + ESSEC + EML + EDHEC
        result.innerHTML += '<br><a class="booknow" href="https://prepaya.zohobookings.eu/#/customer/prepaya/booknow">Prendre rendez-vous maintenant</a>'
    }
</script>