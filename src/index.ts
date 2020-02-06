import * as CryptoJS from "crypto-js";

class Block{
    public index : number;
    public hash: string;
    public previousHash : string;
    public data : string;
    public timestamp : number;

    static calculateBlockHash = (
        index: number,
        previousHash: string,
        data: string,
        timestamp: number):string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructur = (aBlock : Block) : boolean => typeof(aBlock.index) === "number" && typeof(aBlock.hash)==="string" && typeof(aBlock.previousHash) === "string" && typeof(aBlock.timestamp) ==="number" && typeof(aBlock.data) ==="string";
    constructor( index: number,
         hash: string,
         previousHash: string,
         data: string,
         timestamp: number){
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;     
    }

}

const genesisBlock : Block= new Block(0,"123456789","","test1",111111);

let blockchain: [Block] = [genesisBlock];

const getBlockChain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length -1];

const getNewtimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index +1;
    const newtimestamp :number = getNewtimestamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, data, newtimestamp);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newtimestamp);
    addBlock(newBlock);
    return newBlock;
}

const getHashforBlock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.data,aBlock.timestamp);

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean =>{
    if(!Block.validateStructur(candidateBlock)){
        return false;
    }else if(previousBlock.index +1 !== candidateBlock.index){
        return false;
    }else if(previousBlock.hash === candidateBlock.hash){
        return false;
    }else if(getHashforBlock(candidateBlock) !== candidateBlock.hash){
        return false;
    }else{
        return true;
    }
};

const addBlock =(candidateBlock : Block) : void =>{
    if(isBlockValid(candidateBlock,getLatestBlock())){
        blockchain.push(candidateBlock);
    }
}

createNewBlock("second_Block");
createNewBlock("third_Block");
createNewBlock("fourth_Block");

console.log(blockchain);

export{};