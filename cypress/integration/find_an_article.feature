Feature: Type an article on Amazon webpage

    Scenario: Find "Testartikel Amazon" on the Amazon shop. Verify the article name on the result list.

        When Open path "/"
        And Type "Testartikel AMAZON" into input with id "twotabsearchtextbox"
        And Click class "nav-search-submit"
        Then Verify class "s-search-results" with text "Testartikel AMAZON"
        And Verify url contains "/s?k=Testartikel+AMAZON"