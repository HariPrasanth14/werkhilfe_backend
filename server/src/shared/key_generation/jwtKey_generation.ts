import { generateKeyPairSync } from "crypto"
import * as path from "path"
import * as fs from "fs"

let dir_path = path.join("..", "..", "..", "project", "secret_keys")

if (!fs.existsSync(dir_path)) {
    fs.mkdirSync(dir_path, { recursive: true })
}

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: "spki",
        format: "pem"
    },
    privateKeyEncoding: {
        type: "pkcs8",
        format: "pem"
    }
})

fs.writeFileSync(path.join(dir_path, "jwt.private.pem"), privateKey)
fs.writeFileSync(path.join(dir_path, 'jwt.public.pem'), publicKey)

console.log("RSA keys created");
