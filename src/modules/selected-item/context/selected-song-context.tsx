import { createContext, useState } from 'react';

interface ISelectedSongContextProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const initialState: ISelectedSongContextProps = {
  showModal: false,
  setShowModal: () => {},
};

export const SelectedSongContext = createContext<ISelectedSongContextProps>(initialState);

interface ISelectedSongProviderProps {
  children: React.ReactNode;
}

const SelectedSongProvider: React.FC<ISelectedSongProviderProps> = ({ children }) => {
  const [showSongModal, setShowSongModal] = useState<boolean>(false);
  return (
    <SelectedSongContext.Provider value={{ showModal: showSongModal, setShowModal: setShowSongModal }}>
      {children}
    </SelectedSongContext.Provider>
  );
};

export default SelectedSongProvider;
