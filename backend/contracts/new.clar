;;;;;;;;;;; TRAITS AND IMPLEMENTATIONS ;;;;;;;;;;;;;;;;;;;;

;; traits are basically interecontract calls
;; (impl-trait .sip009-nft-trait.sip009-nft-trait)

;; SIP009 NFT trait on mainnet
;; (impl-trait 'SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait.nft-trait)

;;;;;;;; DATA VARIABLES AND CONSTANTS ;;;;;;;;;;;;;;;;;;;;;

(define-non-fungible-token MI-token uint)
(define-data-var last-token-id uint u0)
(define-constant contract-owner tx-sender)