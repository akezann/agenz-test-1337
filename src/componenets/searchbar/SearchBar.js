import React, {useState} from 'react';
import search from '../../assets/images/search.png'
import './SearchBar.css'

function SearchBar() {
  const [checked, setChecked] = useState('vendre')
  const [prev, setPrev] = useState('vendre')

  const ischeckboxSelected = (value) => checked === value;

  const handleChecked = (e) => {
    if (checked === prev)
    {
        setChecked(e.target.value)
        setPrev(e.target.value)
    }
  }

return (
    <div className='searchbar'>
      <div>
        <form className="form">
            <label htmlFor="search">
            <input type="text" name="search" id="search" placeholder='Entrez une ville,un quartier,une adresse'/>
            </label>
            <button className="search-icon">
                <img src={search} alt="search"/>
            </button>
        </form>
      </div>
      <form className='filter-form'>
                    <div>
                        <input
                            id="vendre"
                            type="checkbox"
                            name='vendre'
                            value='vendre'
                            checked={ischeckboxSelected('vendre')}
                            onChange={handleChecked}
                            style={{ display:"none"}}
                        />
                        <label htmlFor="vendre"
                          style={{border: "1px solid #460AF0"}}>
                           <span></span>
                          A vendre
                        </label>
                    </div>
                    <div>
                        <input
                            id="prix"
                            type="checkbox"
                            name='prix'
                            value='prix'
                            checked={ischeckboxSelected('prix')}
                            onChange={handleChecked}
                            style={{ display:"none"}}
                        />
                        <label htmlFor="prix"
                            style={{border: ischeckboxSelected('prix') ? "1px solid #460AF0": "1px solid rgba(0, 0, 0, 0.3)"}}>
                            Prix
                        </label>
                    </div>
                    <div>
                        <input
                            id="type"
                            type="checkbox"
                            name='type'
                            value='type'
                            checked={ischeckboxSelected('type')}
                            onChange={handleChecked}
                            style={{ display:"none"}}
                        />
                        <label htmlFor="type"
                            style={{border: ischeckboxSelected('type') ? "1px solid #460AF0": "1px solid rgba(0, 0, 0, 0.3)"}}>
                            Type
                        </label>
                    </div>
                    <div>
                        <input
                            id="surface"
                            type="checkbox"
                            name='surface'
                            value='surface'
                            checked={ischeckboxSelected('surface')}
                            onChange={handleChecked}
                            style={{ display:"none"}}
                        />
                        <label htmlFor="surface"
                            style={{border: ischeckboxSelected('surface') ? "1px solid #460AF0": "1px solid rgba(0, 0, 0, 0.3)"}}>
                            Surface
                        </label>
                    </div>
                    <div>
                        <input
                            id="chambres"
                            type="checkbox"
                            name='chambres'
                            value='chambres'
                            checked={ischeckboxSelected('chambres')}
                            onChange={handleChecked}
                            style={{ display:"none"}}
                        />
                        <label htmlFor="chambres"
                            style={{ border: ischeckboxSelected('chambres') ? "1px solid #460AF0": "1px solid rgba(0, 0, 0, 0.3)"}}>
                          Chambres
                        </label>
                    </div>
                    <div>
                      <input
                              id="valider"
                              type="submit"
                              name='valider'
                              value='valider'
                              className="submit-btn"
                          />
                    </div>
            </form>
      
    </div>
  )
}

export default SearchBar