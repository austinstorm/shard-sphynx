### TO-DO

1. Try not to get too intimidated.

#### Meta

* ~~Better themes~~ 2/12
* GitHub repo

#### Brands

* Brand detail page
* Fancy brand table
* Delete brand
* Link to Company
* Active?
* Social media integration for machine tags

#### Companies

* ~~Add~~ 2/11
* ~~Company Detail page~~ 2/11
* ~~Fix _id field~~ 2/12
* Complete field list from FTC site
* Import data from Staab scrape
* Additional fields - date added, date founded, date disbanded, active?
* Display description as Markdown formatted text

#### Stuff that really doesn't matter

* Favicon
* Beth Bowley brands: Tabitha (Anthropologie exclusive?), Cooper, Sabrina, White Rabbit, Prose, namesake (Justia trademark search)
* Images attached to nodes

The full schema:
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "address-line-2": {
      "type": "string"
    },
    "fax": {
      "type": "string"
    },
    "info-url": {
      "type": "string"
    },
    "product-line": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "state-code": {
      "type": "string"
    },
    "company-name": {
      "type": "string"
    },
    "city": {
      "type": "string"
    },
    "business-type": {
      "type": "string"
    },
    "rn-number": {
      "type": "string"
    },
    "zip": {
      "type": "string"
    },
    "legal-name": {
      "type": "string"
    },
    "address-line-1": {
      "type": "string"
    }
  }
}
Go to top
