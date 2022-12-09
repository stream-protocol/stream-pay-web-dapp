<p align="center">
  <img src="https://i.imgur.com/https://imgur.com/XOiFt7Y" width="800" height="290"/>

# Stream Pay Web3 App - Alpha



Stream Pay is a web application to make web3 payment requests frictionless.


### Libraries

- NextJs 
- Wagmi
- Rainbow Kit
- Tailwind CSS
- ipfs-http
- Next-qr-code
- Next-share

### Setup

1. Make `.env.local`

```shell
touch .env.local
```

add environment variable

```text
NEXT_PUBLIC_INFURA_PROJECT_ID={project_id}
NEXT_PUBLIC_INFURA_SECRET={secret}
```

3. Install dependencies

```bash
npm install
```

4. Start developmment

```bash
npm run dev
```

5. 📱 Open http://localhost:3000 to see the app

### Production

Live deployment is made via Github / Vercel integration, as a vercel.app, from master branch.


### Web Application

Dapp demo: [stream-pay-web-dapp](https://stream-pay-web-dapp.vercel.app/)


#### 

- Create/add Solana blockchain support
- Create/add Stream Token (SPL) implementation and smart contract
  
