Feature: Find the cheapest article

    Scenario: Find the cheapest "Snickers" on the Amazon shop. Compares first 4 prices. This test does not consider transport costs.

        When Open path "/s?k=snickers&s=price-asc-rank"
        And Store xpath "//*[@data-index='5']//*[contains(@class, 'a-price-whole')]" as "articlePrice1"
        And Store xpath "//*[@data-index='9']//*[contains(@class, 'a-price-whole')]" as "articlePrice2"
        And Store xpath "//*[@data-index='10']//*[contains(@class, 'a-price-whole')]" as "articlePrice3"
        And Store xpath "//*[@data-index='11']//*[contains(@class, 'a-price-whole')]" as "articlePrice4"
        Then Verify value "$articlePrice1" is less than value "$articlePrice2"
        And Verify value "$articlePrice2" is less than value "$articlePrice3"
        And Verify value "$articlePrice3" is less than value "$articlePrice4"