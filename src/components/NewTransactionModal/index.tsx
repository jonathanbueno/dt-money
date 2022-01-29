import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Container>
        <button
          type='button'
          onClick={onRequestClose}
          className='react-modal-close'
        >
          <img src={closeImg} alt='Fechar Modal' />
        </button>
        <h2>Cadastrar transação</h2>

        <input placeholder='titulo' />
        <input placeholder='valor' type='number' />

        <TransactionTypeContainer>
          <button type='button'>
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </button>
          <button type='button'>
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder='categoria' />
        <input placeholder='data' />
        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
