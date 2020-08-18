Feature: New customers can register an account

    Scenario: Find the cheapest "Snickers" on the Amazon shop. This test does not consider transport costs.

        When Open path "/s?k=snickers&s=price-asc-rank"
        # 5th data-index because there are 4 advertised products beforehand
        And Click data-index "5"
        And Store xpath "//*[@id='priceInsideBuyBox_feature_div']//*[contains(@class, 'a-color-price')]" as "articlePrice1"
        And Click title "In den Einkaufswagen"
        When Open path "/s?k=skittles&s=price-asc-rank"
        And Click data-index "5"
        And Store xpath "//*[@id='unqualified-buybox-olp']//*[contains(@class, 'a-color-price')]" as "articlePrice2"
        And Click title "Alle Angebote"
        And Click xpath "//*[@id='a-autoid-0']/span/input"
        And Click xpath "//*[@id='hlb-view-cart-announce']"
        And Calculate "$articlePrice1" plus "$articlePrice2" as "expectedTotalPrice"
        And Store xpath "//*[@id='sc-subtotal-amount-activecart']/span" as "totalPrice"
        Then Verify value "$expectedTotalPrice" is equal value "$totalPrice"