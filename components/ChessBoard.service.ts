import {
  ChessPieceItem,
  ChessPiecesBlack,
  ChessPiecesWhite,
} from '~/interfaces/chess'

export class ChessBoardService {
  constructor() {}

  findPieceFoorCoordinate({
    coordinate,
    positionWhites,
    positionBlacks,
  }: {
    coordinate: string
    positionWhites: ChessPiecesWhite
    positionBlacks: ChessPiecesBlack
  }): ChessPieceItem | null {
    const pieceBlack: any =
      Object.values(positionBlacks)?.find(
        (piece: ChessPieceItem) => piece.position === coordinate && !piece.dead
      ) || null
    if (pieceBlack) return pieceBlack
    const pieceWhite: any =
      Object.values(positionWhites)?.find(
        (piece: ChessPieceItem) => piece.position === coordinate && !piece.dead
      ) || null
    return pieceWhite
  }

    coordinateHasOwnPiece(
    pieceOfCoordinate: ChessPieceItem,
    piece: ChessPieceItem
  ): boolean {
    if(!pieceOfCoordinate) return false
    return pieceOfCoordinate.side === piece.side
  }

  private checkLegalMovePawn(
    piece: ChessPieceItem,
    coordinate: string
  ): boolean {
    const currentCoordinate = piece.position
    const currentY = currentCoordinate[0]
    const currentX: number = parseInt(currentCoordinate[1])

    const newY = coordinate[0]
    const newX: number = parseInt(coordinate[1])

    const sameY = currentY === newY

    if (!piece.hasMoved) {
      let yDiffOneOrTwo
      if (piece.side === 'white') {
          const diff = newX - currentX
        yDiffOneOrTwo = diff <= 2
      } else if (piece.side === 'black') {
        const diff = currentX - newX
        yDiffOneOrTwo = diff <= 2
      }
      return sameY && yDiffOneOrTwo
    }
    let yDiffOne
    if (piece.side === 'white') {
      const diff = newX - currentX
      
      yDiffOne = diff === 1
    } else if (piece.side === 'black') {
      const diff = currentX - newX
      yDiffOne = diff === 1
    }
    return sameY && yDiffOne
  }

  private isLegalMove(piece: ChessPieceItem, coordinate: string): boolean {
    if (piece.value === 'pawn') {
      const r = this.checkLegalMovePawn(piece, coordinate)
      return r
    }
  }

  handleMove(
    coordinate: string,
    piece: ChessPieceItem,
    positionWhites: ChessPiecesWhite,
    positionBlacks: ChessPiecesBlack
  ) {
    const pieceOfCoordinate = this.findPieceFoorCoordinate({
      coordinate,
      positionWhites,
      positionBlacks,
    })
    console.log(pieceOfCoordinate)
    if (!pieceOfCoordinate) {
      if (this.isLegalMove(piece, coordinate)) {
        return {
          movedPiece: {
            position: coordinate,
            id: piece.id,
            side: piece.side,
          },
          eatenPiece: null,
          didMove: true,
        }
      }
      return {
        movedPiece: null,
        eatenPiece: null,
        didMove: false,
      }
    }

    if (this.coordinateHasOwnPiece(pieceOfCoordinate, piece)) {
      return {
        movedPiece: null,
        eatenPiece: null,
        didMove: false,
      }
    }

    if (!this.isLegalMove(piece, coordinate)) {
      return {
        movedPiece: null,
        eatenPiece: null,
        didMove: false,
      }
    }

    return {
      movedPiece: {
        position: coordinate,
        id: piece.id,
        side: piece.side,
      },
      eatenPiece: null,
      didMove: true,
    }
  }
}

export default new ChessBoardService()
