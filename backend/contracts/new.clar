;;;;;;;;;;; TRAITS AND IMPLEMENTATIONS ;;;;;;;;;;;;;;;;;;;;

;; traits are basically interecontract calls
;; (impl-trait .sip009-nft-trait.sip009-nft-trait)

;; SIP009 NFT trait on mainnet
;; (impl-trait 'SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait.nft-trait)

;;;;;;;; DATA VARIABLES AND CONSTANTS ;;;;;;;;;;;;;;;;;;;;;

(define-non-fungible-token MI-token uint)
(define-data-var last-token-id uint u0)
(define-constant contract-owner tx-sender)

;;;;;;;;;;;; ERRORS ;;;;;;;;;;;;;;;;

(define-constant err-not-contract-owner (err u200))
(define-constant err-caller-not-admin (err u300))
(define-constant err-caller-not-sender (err u301))
(define-constant err-caller-not-allowed (err u302))
(define-constant err-caller-not-owner (err u303))


;;;;;;;;;;;;;; MAPS ;;;;;;;;;;;;;;;;;;;;;;;;

;; map for all admin principals
(define-map admin-access { admin-principal: principal } { is-authorised: bool })

;; map for users and manufacturers
(define-map user-access { user-principal: principal } { is-manufacturer: bool })

;; map for all nft uris
(define-map nft-info { nft-uid: uint} { data-hash: (buff 32), uri: (string-ascii 256)})