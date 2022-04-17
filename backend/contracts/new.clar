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


;;;;;;;;;;;;;;;; GETTERS ;;;;;;;;;;;;;;;;;;;;;;;

(define-read-only (get-last-token-id)
    (ok (var-get last-token-id))
)


(define-read-only (get-token-uri (token-id uint))
    (ok (get uri (map-get? nft-info (tuple (nft-uid token-id)))))
)

(define-read-only (get-token-hash (token-id uint))
    (ok (get data-hash (map-get? nft-info (tuple (nft-uid token-id)))))
)


(define-read-only (get-owner (token-id uint))
    (ok (nft-get-owner? MI-token token-id))
)


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; CHECKING ACCESS RIGHTS ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; function to see whether a principal is in the auth-universities map

(define-private (is-admin (incoming-principal principal)) 
  (is-some (map-get? admin-access (tuple (admin-principal incoming-principal))))
)

(define-read-only (is-manufacturer (incoming-principal principal)) 
  (is-eq (get is-manufacturer (map-get? user-access (tuple (user-principal incoming-principal)))) (some true))
)

(define-read-only (is-user (incoming-principal principal)) 
  (is-some (map-get? user-access (tuple (user-principal incoming-principal))))
)


;;;;;;;;;;;;;;;;;;; SETTERS ;;;;;;;;;;;;;;;;;;;;

;; function to add admins
(define-public (add-admins (new-admin principal))
  (begin
    ;;only the deployer of the contract can add new admins 
    (asserts! (is-eq contract-owner tx-sender) err-not-contract-owner)
    (ok (map-set admin-access {admin-principal: new-admin} {is-authorised: true}))
  )
)

;; function to add manufacturer
(define-public (add-manufacturer (new-man principal))
  (begin
    ;; (asserts! (is-admin tx-sender) (err {kind: "caller-not-admin", code: u300}))
    (asserts! (is-admin tx-sender) err-caller-not-admin)
    (ok (map-set user-access { user-principal: new-man } {is-manufacturer: true}))  
  )
)

;; function to add normal user (not manufacturer)
(define-public (add-user (new-user principal))
  (begin
    (asserts! (is-admin tx-sender) err-caller-not-admin)
    (ok (map-set user-access { user-principal: new-user } {is-manufacturer: false}))  
  )
)

(define-public (mint (recipient principal) (token-hash (buff 32)) (token-uri (string-ascii 256)))
    (let
        (
            (token-id (+ (var-get last-token-id) u1))
        )
        (asserts! (is-eq tx-sender recipient) err-caller-not-owner)
        (asserts! (or 
            (is-admin tx-sender)
            (is-user tx-sender)
        ) err-caller-not-allowed)
        (try! (nft-mint? MI-token token-id recipient))
        (var-set last-token-id token-id)
        (map-set nft-info { nft-uid: (var-get last-token-id) } {data-hash: token-hash, uri: token-uri})
        (ok token-id)
    )
)

(define-public (transfer (token-id uint) (sender principal) (recipient principal))
    (begin
        (asserts! (is-eq tx-sender sender) err-caller-not-sender)
        (nft-transfer? MI-token token-id sender recipient)
        ;; built in errors : u1 => sender does not own the asset
        ;; u2 => sender and recipient same
        ;; u3 asset does not exist????
    )
)