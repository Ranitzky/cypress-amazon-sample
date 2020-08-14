Feature: Type an article on Amazon webpage

    Scenario: Find "Testartikel Amazon" on the Amazon shop. Verify the article name on the result list.

        When Open path "/"
        And Type "Amazon Testartikel" into input with id "twotabsearchtextbox"
        And Click class "nav-search-submit-text"
        Then Verify class "s-result-list" with text "Amazon Testartikel"