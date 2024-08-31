package br.com.gabrizord.gzgestao.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Entity
@Table(name = "companies")
public class Company implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String razaoSocial;

    @Column(length = 100)
    private String nomeFantasia;

    @Column(nullable = false, unique = true, length = 14)
    private String cnpj;

    @Column(length = 20)
    private String inscricaoEstadual;

    @Column(nullable = false)
    private String street;

    @Column(nullable = false, length = 10)
    private String number;

    @Column(length = 100)
    private String neighborhood;

    @Column(nullable = false, length = 50)
    private String city;

    @Column(nullable = false, length = 2)
    private String state;

    @Column(nullable = false, length = 9)
    private String postalCode;

    @Column(nullable = false)
    private Integer stateRegistrationIndicator;

    @Column(length = 7)
    private String municipalityCode; // Código do Município (IBGE)

    @Column(length = 11)
    private String phone;

    @Column(length = 100)
    private String email;

}
