

describe("Renders the home page", ()=> {
    beforeEach(()=> {
        cy.visit("/");
    });

    function checkContainsDefaultMovies() {
        cy.contains("Shazam!")
        cy.contains("Captain Marvel")
        cy.contains("Escape Room")
    }



    it("Renders correctly and contains all of the elements", () => {
        cy.get("#sort-drop-down").should("exist")
        cy.get("#nav-bar").should("exist")
        cy.get("#side-bar").should("exist")
        cy.get("#movie-container").should("exist")
        cy.get("#search-field-in-navbar").should("exist")
        cy.get("#login-button-in-appbar").should("exist")
        cy.get("#genre-selection-checkbox-submenu").should("exist")
        cy.get("#year-selection-datepicker-submenu").should("exist")
    })
    
    it("Movies are loaded", ()=> {
        //Checking the three first movies that will be on top if sorting or filtering options are not selected
        checkContainsDefaultMovies()
        
    })

    it("Detalied view of clicked movie is showing", ()=> {
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiCardMedia-root').click();
        cy.get("#detailed-movie-view").should("exist")
        cy.contains("The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.")
        cy.get('[data-testid=CloseIcon]').click();
        cy.get("#detailed-movie-view").should("not.exist")
        
    })
    
    it("Sorting works", ()=> {
        //Checking the three first movies that will be on top if the following sorting option is selected
        
        //Title asc
        //cy.get('body').click();
        cy.get("#sort-drop-down").click();
        cy.get('[data-value="title"]').click();
        cy.contains("10,000 BC")
        cy.contains("10.0 Earthquake")
        cy.contains("100 Degrees Below Zero")
        
        //Tilte desc
        cy.get("#sort-drop-down").click();
        cy.get('[data-value="-title"]').click();
        cy.contains("Æon Flux")
        cy.contains("xXx: State of the Union")
        cy.contains("xXx: Return of Xander Cage")
        
        //Release year asc
        cy.get("#sort-drop-down").click();
        cy.get('[data-value="release_date"]').click();
        cy.contains("The Kid")
        cy.contains("Cops")
        cy.contains("Sherlock")
        
        //Release year desc
        cy.get("#sort-drop-down").click();
        cy.get('[data-value="-release_date"]').click();
        cy.contains("The Suicide Squad")
        cy.contains("Indiana Jones 5")
        cy.contains("Jurassic World 3")
        
        //Removing sorting options
        cy.get("#sort-drop-down").click();
        cy.get('[data-value=""]').click();
        cy.contains("Shazam!")
        cy.contains("Captain Marvel")
        cy.contains("Escape Room")

    })

    it("Filtering by genre works", ()=> {
        //Checking that the correct three first movies that will be on top before filtering options are selected
        checkContainsDefaultMovies()
        
        //Selecting genre options
        cy.get('#genre-selection-checkbox-submenu > .pro-inner-item > .pro-item-content').click();
        //Checking and selecting "Animation"
        cy.get(':nth-child(3) > .MuiCheckbox-root > .PrivateSwitchBase-input').check();
        cy.get('.MuiFormGroup-root > .MuiButton-root').click();
        //Checking that the correct three first movies with animation as genre is showing
        cy.contains("How to Train Your Dragon: The Hidden World")
        cy.contains("Doraemon the Movie: Nobita's Treasure Island")
        cy.contains("Cars")
        
        //Adding "Comedy" as genre too
        cy.get(':nth-child(4) > .MuiCheckbox-root > .PrivateSwitchBase-input').check();
        cy.get('.MuiFormGroup-root > .MuiButton-root').click();
        //Checking that the correct three first movies with animation and comedy as genre is showing
        cy.contains("Cars")
        cy.contains("Spider-Man: Into the Spider-Verse")
        cy.contains("Ralph Breaks the Internet")
        
        //Removing all the selected genres
        cy.get(':nth-child(3) > .MuiCheckbox-root > .PrivateSwitchBase-input').uncheck();
        cy.get(':nth-child(4) > .MuiCheckbox-root > .PrivateSwitchBase-input').uncheck();
        cy.get('.MuiFormGroup-root > .MuiButton-root').click();
        
        //Checking the three first movies that will be on top if sorting or filtering options are selected
        checkContainsDefaultMovies()
    })

    
    it("Login & Logout", ()=> {
        //Login
        cy.get('#login-button-in-appbar').click();
        //cy.get('#username').clear();
        cy.get('#username').type('cypressTest');
        cy.get('.MuiBox-root > .MuiButton-root').click();
        cy.get("#username-display").should("exist")
        cy.contains("cypressTest");
        checkContainsDefaultMovies()
        //Logout
        cy.get('#logout-button-in-appbar').click();
        cy.get("#username-display").should("not.exist")
        checkContainsDefaultMovies()
        
    })

});

