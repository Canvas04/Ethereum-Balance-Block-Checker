import { ethers } from "ethers"
import { useContext, useEffect, useState } from "react"
import { Web3Provider } from "@ethersproject/providers";
import { Web3Context } from "../Web3Context";

declare let window: any;

export const EtheriumBalance = () => {
    const { account, setWeb3, provider } = useContext(Web3Context);

    const [userAddress, setUserAddress] = useState('')
    const [balance, setBalance] = useState('0')
    const [blockNumber, setBlockNumber] = useState(0)

    useEffect(() => {
        const fetchAsync = async () => {
            await provider.send("eth_requestAccounts", [])
            const signer = provider.getSigner()
            const address = await signer.getAddress()
            setUserAddress(address)

            const balance = await provider.getBalance(address)
            setBalance(ethers.utils.formatEther(balance))

            const blockNumber = await provider.getBlockNumber()
            setBlockNumber(blockNumber)

        }
        if (account) fetchAsync()
    })
    return <>
        <div className="flex justify-around items-center py-3">Etherium Balance Checker:
            <div className="flex flex-col">
                <p>
                    Адрес: {userAddress}
                </p>
                <p>Баланс: {balance}ETH</p>
                <p>Текущий блок: {blockNumber}</p>
            </div>
        </div>

    </>
}